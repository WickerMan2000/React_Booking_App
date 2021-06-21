import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../CustomHooks/useInput";
import SubForm from "./SubForm";
import styles from "./SubmissionForm.module.css";

const SubmissionForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  
  const {
    inputCase: firstName,
    touchInput: touchInputFirstName,
    inputValidation: firstNameInputValidation,
    blurHandler: firstNameBlurHandler,
    changeHandler: firstNameChangeHandler,
    submissionCase: firstNameSubmissionCase,
  } = useInput();

  const {
    inputCase: lastName,
    touchInput: touchInputLastName,
    inputValidation: lastNameInputValidation,
    blurHandler: lastNameBlurHandler,
    changeHandler: lastNameChangeHandler,
    submissionCase: lastNameSubmissionCase,
  } = useInput();

  const {
    inputCase: phoneNumber,
    touchInput: touchInputPhoneNumber,
    inputValidation: phoneNumberInputValidation,
    blurHandler: phoneNumberBlurHandler,
    changeHandler: phoneNumberChangeHandler,
    submissionCase: phoneNumberSubmissionCase,
  } = useInput();

  const {
    inputCase: emailAddress,
    touchInput: touchInputEmailAddress,
    inputValidation: emailAddressInputValidation,
    blurHandler: emailAddressBlurHandler,
    changeHandler: emailAddressChangeHandler,
    submissionCase: emailAddressSubmissionCase,
  } = useInput();

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      phoneNumber &&
      emailAddress &&
      emailAddress.includes("@")
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [firstName, lastName, phoneNumber, emailAddress]);

  const submissionHandler = event => {
    event.preventDefault();

    firstNameSubmissionCase();
    lastNameSubmissionCase();
    phoneNumberSubmissionCase();
    emailAddressSubmissionCase();
  };

  return (
    <div className={styles.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        My Booking
      </Link>
      <form onSubmit={submissionHandler} className={styles.GenerealForm}>
        <SubForm
          fieldName={"Firstname:"}
          touchInput={touchInputFirstName}
          inputValidation={firstNameInputValidation}
          type={"text"}
          id={"name"}
          value={firstName}
          warningMessage={"Please fill in your first name"}
          changeHandler={firstNameChangeHandler}
          blurHandler={firstNameBlurHandler}
        />
        <SubForm
          fieldName={"Lastname:"}
          touchInput={touchInputLastName}
          inputValidation={lastNameInputValidation}
          type={"text"}
          id={"name"}
          value={lastName}
          warningMessage={"Please fill in your last name"}
          changeHandler={lastNameChangeHandler}
          blurHandler={lastNameBlurHandler}
        />
        <SubForm
          fieldName={"Phonenumber:"}
          touchInput={touchInputPhoneNumber}
          inputValidation={phoneNumberInputValidation}
          type={"number"}
          id={"phoneNumber"}
          value={phoneNumber}
          warningMessage={"Please fill in your phone number"}
          changeHandler={phoneNumberChangeHandler}
          blurHandler={phoneNumberBlurHandler}
        />
        <SubForm
          fieldName={"EmailAddress:"}
          touchInput={touchInputEmailAddress}
          inputValidation={emailAddressInputValidation}
          type={"text"}
          id={"emailAddress"}
          value={emailAddress}
          warningMessage={"Please fill in your email address"}
          isItAnEmail={emailAddress && !emailAddress.includes("@")}
          changeHandler={emailAddressChangeHandler}
          blurHandler={emailAddressBlurHandler}
        />
        <div className={styles.actions}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
