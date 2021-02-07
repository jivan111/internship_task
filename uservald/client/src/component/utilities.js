function validate(user) {
  const emailReg = new RegExp(
    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/
  );
  console.log(user, "user")
  const validationMessage = {
    message: "",
    type: "",
    valid: false,
    open: true,
  };
  if (!user.name) {
    validationMessage.message = "name is important!";
    validationMessage.type = "error";
    return validationMessage;
  } else if (!user.email) {
    validationMessage.message = "email is required";
    validationMessage.type = "error";
    return validationMessage;
  } else if (!emailReg.test(user.email.trim(" "))) {
    validationMessage.message="invalid email"
    validationMessage.type="error"
    return validationMessage
  } else if (!user.phone) {
    validationMessage.message = "phone is required";
    validationMessage.type = "error";
    return validationMessage;
  } else if (!user.phone.trim().match(/\d{10}/)) {
    validationMessage.message = "invalid phone";
    validationMessage.type = "error";
    return validationMessage;
  }else if(user.password.trim().length<6 ){
    console.log("password...")
      validationMessage.message="password should be 6 character long";
      validationMessage.type="error";
      return validationMessage;
  }else if(user.confirm_pass.trim()!==user.password.trim()){
      validationMessage.message = "password didn't match";
      validationMessage.type = "error";
      return validationMessage;
  }else if (!user.dob.day || !user.dob.month || !user.dob.year) {

    validationMessage.message = "date of birth required";
    validationMessage.type = "error";
    return validationMessage;
  }else{
    validationMessage.valid=true;
    return validationMessage
  }

}

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export { validate, monthList };