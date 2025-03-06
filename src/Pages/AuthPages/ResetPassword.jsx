import React from "react";
import styles from "./ResetPassword.module.css";
import Image from "../../assets/images/Group.png";
import Eye from '../../assets/images/eye.png';

export default function ResetPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <div className={styles.Heading}>
            <img src={Image} alt="image-left" />
          </div>
        </div>
        <div className={styles.right}>
          <h2>Reset Password</h2>
          <p>Set New Password To Your Account</p>
          <form className={styles.form}>
            <div className={styles.newPassword}>
              <label htmlFor="newPassword">New Password</label>
              <input type="password" id="newPassword" placeholder="*******" />
              <img src={Eye} alt="eye" />
            </div>
            <div className={styles.passwordConfirm}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="*******"
              />
              <img src={Eye} alt="eye" />
            </div>
            <div className={styles.goBack}>
              <p>
                Go Back To <span>Login</span>
              </p>
            </div>
            <button>Submit</button>
            <div className={styles.signup}>
              <p>
                Don't have an account? <span>Sign Up</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
