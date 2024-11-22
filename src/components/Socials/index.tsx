import React from "react";
import "./index.css";
import { auth, fbProvider, googleProvider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../utilities/types";

interface SocialsProps {
  hide: (modal: Modal) => void;
}

const Socials: React.FC<SocialsProps> = ({ hide }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick = (provider: any) => async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result.user);
        dispatch(
          setUser({
            email: result.user.email,
            id: result.user.uid,
            displayName: result.user.displayName,
            name: result.user.displayName?.split(" ")[0],
            lastName: result.user.displayName?.split(" ")[1],
            phoneNumber: result.user.phoneNumber,
            photoURL: result.user.photoURL,
            token: credential?.accessToken,
          }),
        );
        navigate("/home");
        hide("signup");
      })
      .catch((e) => console.log("Error =>", e));
  };

  return (
    <div className="socials-wrapper">
      <button onClick={onClick(googleProvider)} className="socials-btn">
        <i className="fa-brands fa-google" />
      </button>
      <button onClick={onClick(fbProvider)} className="socials-btn">
        <i className="fa-brands fa-facebook" />
      </button>
      {/* todo add apple signIn functionality */}
      <button onClick={onClick("apple")} className="socials-btn">
        <i className="fa-brands fa-apple" />
      </button>
    </div>
  );
};
export default Socials;
