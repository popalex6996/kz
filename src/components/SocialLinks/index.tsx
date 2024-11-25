import React from 'react';
import './index.css';

interface SocialLinksProps {
  color?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ color = 'white' }) => {
  return (
    <div className="social-links">
      <button onClick={() => {}} className="social-link">
        <i className={`fa-brands fa-facebook ${color}-link`} />
      </button>
      <button onClick={() => {}} className="social-link">
        <i className={`fa-brands fa-instagram ${color}-link`} />
      </button>
      <button onClick={() => {}} className="social-link">
        <i className={`fa-brands fa-youtube ${color}-link`} />
      </button>
    </div>
  );
};
export default SocialLinks;
