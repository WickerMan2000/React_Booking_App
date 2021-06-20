import React from "react";
import { Link } from "react-router-dom";
import styles from "./SubmissionForm.module.css";

const SubmissionForm = () => {
  return (
    <div className={styles.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        My Booking
      </Link>
    </div>
  );
};

export default SubmissionForm;
