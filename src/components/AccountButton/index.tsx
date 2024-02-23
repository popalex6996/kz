import "./index.css";

import { useState } from "react";
import Modal from "../Modal";
import SignUp from "../SignUp";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { INITIAL_USER } from "../../utilities/constants";

const AccountButton = () => {
  const navigate = useNavigate();

  // const [user, setUser] = useState<User>(initialUser);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalVisible((isVisible) => !isVisible);
  };

  return (
    <div className="account-btn-wrapper">
      {INITIAL_USER.id ? (
        <button
          className="account-btn"
          onClick={() => {
            navigate(`/account`);
          }}
        >
          {INITIAL_USER.img ? (
            <img className="account-img" src={INITIAL_USER.img} alt="user" />
          ) : (
            <div className="initials">
              {INITIAL_USER.name[0] + INITIAL_USER.lastName[0]}
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

export default AccountButton;
