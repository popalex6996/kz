import React, { useState } from "react";
import "./index.css";
import Spacer from "../Spacer";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [isLoginTab, setLoginTab] = useState(true);

  const onSignIn = () => {};
  const onSignUp = () => {};

  return (
    <div className="signup-wrapper">
      <div className="tabs">
        <div
          className={`tab-name ${isLoginTab && "active"}`}
          onClick={() => setLoginTab(true)}
        >
          Вхід
        </div>
        <div
          className={`tab-name ${!isLoginTab && "active"}`}
          onClick={() => setLoginTab(false)}
        >
          Реєстрація
        </div>
      </div>
      <Spacer height={50} />
      {isLoginTab ? (
        <form id="signin" className="signup-form" onSubmit={onSignIn}>
          <input className="auth-input" type="email" placeholder="Ел. пошта" />
          <Spacer height={20} />
          <input className="auth-input" type="password" placeholder="Пароль" />
          <Spacer height={10} />
          <div className="reset-pass-wrapper">
            <button className="reset-pass-btn">Забули пароль?</button>
          </div>
          <Spacer height={50} />
          <button className="submit-btn" type="submit">
            Увійти
          </button>
          <Spacer height={20} />
          <span>або</span>
          <Spacer height={20} />
        </form>
      ) : (
        <form id="signup" className="signup-form" onSubmit={onSignUp}>
          <input className="auth-input" type="text" placeholder="Ім'я" />
          <Spacer height={20} />
          <input className="auth-input" type="text" placeholder="Прізвище" />
          <Spacer height={20} />
          <input
            className="auth-input"
            type="text"
            placeholder="Номер телефону"
          />
          <Spacer height={20} />
          <input className="auth-input" type="email" placeholder="Ел. пошта" />
          <Spacer height={20} />
          <input
            className="auth-input"
            type="password"
            placeholder="Придумайте пароль"
          />
          <Spacer height={20} />
          <div className="reset-pass-wrapper">
            <span className="terms">
              Реєструючись, ви погоджуєтеся з умовами{" "}
              <a href="/privacy" target="_blank" className="terms-link">
                положення про обробку і захист персональних даних
              </a>{" "}
              та{" "}
              <a href="/terms" target="_blank" className="terms-link">
                угодою користувача
              </a>
            </span>
          </div>
          <Spacer height={30} />
          <button className="submit-btn" type="submit">
            Зареєструватись
          </button>
          <Spacer height={10} />
          <button className="already-signed" onClick={() => setLoginTab(true)}>
            Я вже зареєстрований
          </button>
          <Spacer height={20} />
          <span>або</span>
          <Spacer height={20} />
        </form>
      )}
    </div>
  );
};

export default SignUp;
