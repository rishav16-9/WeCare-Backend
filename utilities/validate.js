exports.validateAge = (dob) => {
  date = new Date();
  dob = new Date(dob);
  if (
    date.getFullYear() - dob.getFullYear() > 20 &&
    date.getFullYear() - dob.getFullYear() < 100
  ) {
    return true;
  }
  return false;
};

exports.validatePin = (pin) => {
  return pin.trim().length === 6;
};

exports.validatePhoneNumber = (phonenumber) => {
  if (phonenumber.trim().length === 10) {
    return true;
  }
  return false;
};

exports.validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

exports.validateName = (name) => {
  if (name.trim().length >= 3 && name.trim().length <= 50) {
    return true;
  }
  return false;
};

exports.validatePassword = (password) => {
  if (password.trim().length >= 5 && password.trim().length <= 10) {
    return true;
  }
  return false;
};

exports.validateAddress = (address) => {
  if (address.trim().length >= 3 && address.trim().length <= 20) {
    return true;
  }
  return false;
};

exports.validateSpeciality = (speciality) => {
  if (speciality.trim().length >= 10 && speciality.trim().length <= 50) {
    return true;
  }
  return false;
};

exports.validateUpcomingWeek = (date) => {
  const now = new Date();
  let newDate = new Date(date);
  const upcomingWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
  if (!newDate >= upcomingWeek || newDate <= upcomingWeek) {
    return true;
  }
  return false;
};
