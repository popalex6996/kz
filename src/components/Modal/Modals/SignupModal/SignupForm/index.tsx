import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Socials from "../../../../Socials";
import Spacer from "../../../../Spacer";
import EmailInput from "../../../../Inputs/EmailInput";
import PasswordInput from "../../../../Inputs/PasswordInput";
import { setUser } from "../../../../../store/slices/userSlice";
import { useAppDispatch } from "../../../../../hooks/redux-hooks";
import { Modal } from "../../../../../utilities/types";
import { auth } from "../../../../../firebase";
import { updateErrors, validation } from "../../../../../utilities/validation";
import NameInput from "../../../../Inputs/NameInput";

interface SignupFormProps {
  setLoginForm: () => void;
  hide: (modal: Modal) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ setLoginForm, hide }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const [errors, setErrors] = useState<{ name: string; text: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    validation(
      formData,
      errors,
      setErrors,
      name as "email" | "password" | "displayName",
    );
  };

  const onSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    validation(formData, errors, setErrors);
    if (
      errors.length ||
      !formData.email ||
      !formData.password ||
      !formData.displayName
    )
      return;
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }) => {
        console.log("user+>", user);
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: formData.displayName,
            /* todo: setting photo upload (paid storage) */
            photoURL: "",
          })
            .then(() => {
              dispatch(
                setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.refreshToken,
                  displayName: user.displayName,
                  name: user.displayName?.split(" ")[0],
                  lastName: user.displayName?.split(" ")[1],
                  photoURL: user.photoURL,
                  password: formData.password,
                }),
              );
            })
            .catch((error) => {});
        }
        navigate("/home");
        hide("signup");
      })
      .catch((error) => {
        console.log("error =>", error);
        if (error.code === "auth/invalid-credential") {
          updateErrors(setErrors, "email", "Не вірний email");
          updateErrors(setErrors, "password", "та/або пароль");
        }
      });
  };

  return (
    <form id="signup" className="signup-form" onSubmit={onSignUp}>
      <NameInput
        name="displayName"
        value={formData.displayName}
        error={errors?.find((e) => e.name === "displayName")?.text}
        onChange={handleInputChange}
        onBlur={onInputBlur}
      />
      <Spacer height={20} />
      <EmailInput
        value={formData.email}
        error={errors?.find((e) => e.name === "email")?.text}
        onChange={handleInputChange}
        onBlur={onInputBlur}
      />
      <Spacer height={20} />
      <PasswordInput
        value={formData.password}
        error={errors?.find((e) => e.name === "password")?.text}
        onChange={handleInputChange}
        onBlur={onInputBlur}
      />
      <Spacer height={30} />
      <button className="submit-btn" type="submit">
        {t("signup")}
      </button>
      <Spacer height={15} />
      <span> {t("or")}</span>
      <Socials hide={hide} />
    </form>
  );
};

export default SignupForm;
