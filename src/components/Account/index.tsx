import "./index.css";

import { useState } from "react";
import Modal from "../Modal";
import SignUp from "../SignUp";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

type User = {
  img: string;
  name: string;
  secondName: string;
  id: string;
};

const initialUser: User = {
  img: "",
  name: "Oleksandr",
  secondName: "Popov",
  id: "1",
};

const Account = () => {
  const navigate = useNavigate();

  // const [user, setUser] = useState<User>(initialUser);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalVisible((isVisible) => !isVisible);
  };

  return (
    <div className="account-btn-wrapper">
      {initialUser.id ? (
        <button
          className="account-btn"
          onClick={() => {
            navigate(`/account`);
          }}
        >
          {initialUser.img ? (
            <img className="account-img" src={initialUser.img} alt="user" />
          ) : (
            <div className="initials">
              {initialUser.name[0] + initialUser.secondName[0]}
            </div>
          )}
        </button>
      ) : (
        <>
          <Button
            onClick={toggleLoginModal}
            icon="user"
            iconClassName="fa-solid"
          />
          <Modal
            onBackdropClick={toggleLoginModal}
            isVisible={isLoginModalVisible}
          >
            <SignUp />
          </Modal>
        </>
      )}
    </div>
  );
};

export default Account;
