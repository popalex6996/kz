export const emailValidation = (email: string) =>
  email.length > 0 && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

export const passwordValidation = (password: string) =>
  password.length > 0 &&
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

export const updateErrors = (
  setErrors: React.Dispatch<React.SetStateAction<{ name: string; text: string }[]>>,
  name: 'email' | 'password' | 'displayName' | 'name' | 'lastName' | 'phoneNumber' | 'birth',
  text?: string,
) => {
  if (text) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    setErrors((prevState) => [...prevState?.filter((e) => e.name !== name), { name, text }]);
  } else {
    // eslint-disable-next-line no-unsafe-optional-chaining
    setErrors((prevState) => [...prevState?.filter((e) => e.name !== name)]);
  }
};

export const validation = (
  formData: {
    email?: string | null;
    password?: string | null;
    displayName?: string | null;
    name?: string | null;
    lastName?: string | null;
    phoneNumber?: string | null;
    birth?: string | null;
  },
  errors: { name: string; text: string }[],
  setErrors: React.Dispatch<React.SetStateAction<{ name: string; text: string }[]>>,
  name?: 'email' | 'password' | 'displayName' | 'name' | 'lastName' | 'phoneNumber' | 'birth',
) => {
  if (!name || name === 'email') {
    // Validate email
    if (!formData.email) {
      updateErrors(setErrors, 'email', 'Email is required');
    } else if (!emailValidation(formData.email)) {
      updateErrors(setErrors, 'email', 'Email is invalid');
    } else if (formData.email && emailValidation(formData.email)) {
      if (errors.find((e) => e.name === 'email')) {
        updateErrors(setErrors, 'email');
      }
    }
  }
  if (!name || name === 'password') {
    // Validate password
    if (!formData.password) {
      updateErrors(setErrors, 'password', 'Password is required');
    } else if (!passwordValidation(formData.password)) {
      updateErrors(
        setErrors,
        'password',
        'Password must contain at least 8 characters long,one uppercase letter, one lowercase letter, least one digit, one special character (e.g., !@#$%^&*) ',
      );
    } else if (formData.password && passwordValidation(formData.password)) {
      if (errors.find((e) => e.name === 'password')) {
        updateErrors(setErrors, 'password');
      }
    }
  }
  if (!name || name === 'displayName') {
    if (!formData.displayName) {
      updateErrors(setErrors, 'displayName', 'Name is required');
    } else {
      if (errors.find((e) => e.name === 'displayName')) {
        updateErrors(setErrors, 'displayName');
      }
    }
  }
  if (!name || name === 'name') {
    if (!formData.name) {
      updateErrors(setErrors, 'name', 'Name is required');
    } else {
      if (errors.find((e) => e.name === 'name')) {
        updateErrors(setErrors, 'name');
      }
    }
  }
  if (!name || name === 'lastName') {
    if (!formData.lastName) {
      updateErrors(setErrors, 'lastName', 'Last name is required');
    } else {
      if (errors.find((e) => e.name === 'lastName')) {
        updateErrors(setErrors, 'lastName');
      }
    }
  }
};
