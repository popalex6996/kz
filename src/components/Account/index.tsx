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
  const [user, setUser] = useState<User>(initialUser);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalVisible((isVisible) => !isVisible);
  };

  return (
    <div className="account-btn-wrapper">
      {user.id ? (
        <button className="account-btn">
          {user.img ? (
            <img className="account-img" src={user.img} alt="user" />
          ) : (
            <div className="initials">{user.name[0] + user.secondName[0]}</div>
          )}
        </button>
      ) : (
        <>
          <Button onClick={toggleLoginModal} type="user" />
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
