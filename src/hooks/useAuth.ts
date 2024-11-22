import { useAppSelector } from "./redux-hooks";

export function useAuth() {
  const {
    email,
    token,
    id,
    photoURL,
    phoneNumber,
    name,
    lastName,
    password,
    birth,
  } = useAppSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
    photoURL,
    phoneNumber,
    name,
    lastName,
    password,
    birth,
  };
}
