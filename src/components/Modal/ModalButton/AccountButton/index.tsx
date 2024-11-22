import { Modal } from "../../../../utilities/types";
import { useAuth } from "../../../../hooks/useAuth";
import Avatar from "../../../Avatar";

const AccountButton = ({ show }: { show: (modal: Modal) => void }) => {
  const { isAuth, photoURL, name, lastName } = useAuth();
  return (
    <Avatar
      src={isAuth ? photoURL || "" : ""}
      name={isAuth ? name?.[0] : ""}
      lastName={isAuth ? lastName?.[0] : ""}
      onClick={() => show(isAuth ? "account" : "signup")}
    />
  );
};

export default AccountButton;
