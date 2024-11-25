import React from 'react';
import './index.css';

interface AvatarProps {
  src?: string;
  name?: string;
  lastName?: string;
  onClick: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ src, name, lastName, onClick }) => {
  console.log(src);
  return (
    <button className="account-btn" onClick={onClick}>
      {src ? (
        <img className="account-img" src={src} alt="user" />
      ) : name && lastName ? (
        <div className="initials">{name + lastName}</div>
      ) : (
        <i className="fa-user fa-solid user-icon" />
      )}
    </button>
  );
};
export default Avatar;
