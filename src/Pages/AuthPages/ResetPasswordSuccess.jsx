import React from "react";
import styles from "./ResetPasswordSuccess.module.css";
import Image from "../../assets/images/pana.png";

export default function ResetPasswordSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <h2>Your password has been successfully reset!</h2>
          <p>You can now log in with your new password</p>
          <form className={styles.form}>
            <button>Submit</button>
          </form>
        </div>
        <div className={styles.right}>
        <h2>Welcome to <span>Super Admin!</span></h2>
        <p>Empowering decisions, simplifying control</p>
          <div className={styles.Heading}>
            <img src={Image} alt="image-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
