import "./index.css";

import { useState } from "react";
import Modal from "../Modal";
import SignUp from "../SignUp";
import Button from "../Button";

type User = {
  img: string;
  name: string;
  secondName: string;
  id: string;
};

const initialUser: User = {
  img: "",
  name: "",
  secondName: "",
  id: "",
};

const Account = () => {
  // const [user, setUser] = useState<User>(initialUser);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalVisible((isVisible) => !isVisible);
  };

  return (
    <div className="account-btn-wrapper">
      {initialUser.id ? (
        <button className="account-btn">
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
          <Button onClick={toggleLoginModal} icon="user" />
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
