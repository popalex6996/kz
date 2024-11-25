import React from 'react';

import './index.css';
import Avatar from '../../../../components/Avatar';
import PersonalDataForm from '../../../../components/PersonalDataForm';
import Spacer from '../../../../components/Spacer';
import { useAuth } from '../../../../hooks/useAuth';

const PersonalDataTab = () => {
  const { photoURL, name, lastName } = useAuth();
  return (
    <div className="personal-data-wrapper">
      <Avatar
        src={photoURL || ''}
        name={name?.[0]}
        lastName={lastName?.[0]}
        size="l"
        onClick={() => {}}
      />
      <Spacer width={20} />
      <PersonalDataForm />
    </div>
  );
};

export default PersonalDataTab;
