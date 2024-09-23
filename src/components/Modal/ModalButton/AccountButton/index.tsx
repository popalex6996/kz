import Button from "../../../Button";

import "./index.css";
import { INITIAL_USER } from "../../../../utilities/constants";
import { Modal } from "../../../../utilities/types";

const AccountButton = ({ show }: { show: (modal: Modal) => void }) => {
  return (
    <div className="account-btn-wrapper">
      {INITIAL_USER.id ? (
        <button className="account-btn" onClick={() => show("account")}>
          {INITIAL_USER.image ? (
            <img className="account-img" src={INITIAL_USER.image} alt="user" />
          ) : (
            <div className="initials">
              {INITIAL_USER.name[0] + INITIAL_USER.lastName[0]}
            </div>
          )}
        </button>
      ) : (
        <Button
          onClick={() => show("signup")}
          icon="user"
          iconClassName="fa-solid"
        />
      )}
    </div>
  );
};

export default AccountButton;
