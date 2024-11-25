import React from 'react';
import './index.css';

interface AvatarProps {
  src?: string;
  name?: string;
  lastName?: string;
  size?: 'm' | 'l';
  onClick: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ src, name, lastName, size = 'm', onClick }) => {
  console.log(src);
  return (
    <button className="account-btn" onClick={onClick}>
      {src ? (
        <img className={`${size === 'l' ? 'l-' : ''}account-img`} src={src} alt="user" />
      ) : name && lastName ? (
        <div className={`${size === 'l' ? 'l-' : ''}initials`}>{name + lastName}</div>
      ) : (
        <i className="fa-user fa-solid user-icon" />
      )}
    </button>
  );
};
export default Avatar;
