import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import styles from "./css/signIn.module.css";
import googleIcon from "../assets/images/GoogleIcon.svg";
import appleIcon from "../assets/images/AppleIcon.svg";

function SignIn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.boardText}>Board.</div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.signInCont}>
          <div className={styles.signInHead}>
            <div className={styles.signIn}>Sign In</div>
            <div className={styles.signInInstr}>Sign in to your account</div>
          </div>

          <div className={styles.auths}>
            <div onClick={() => loginWithRedirect()} className={styles.auth}>
              <img src={googleIcon} alt="Google" className={styles.authIcon} />
              <div className={styles.authText}>Sign in with Google</div>
            </div>

            <div className={styles.auth}>
              <img src={appleIcon} alt="Apple" className={styles.authIcon} />
              <div className={styles.authText}>Sign in with Apple</div>
            </div>
          </div>

          <div className={styles.signInForm}>
            <form action="#" method="POST" className={styles.form}>
              <div className={styles.fields}>
                <label className={styles.formLabel}>Email address</label>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.fields}>
                <label className={styles.formLabel}>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={styles.formInput}
                />
              </div>
              <a href="#" className={styles.forgotPwd}>
                Forgot password?
              </a>
              <button type="submit" className={styles.signInBtn}>
                Sign In
              </button>
            </form>
          </div>

          <div className={styles.registerText}>
            Don’t have an account? <a href="#">Register here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
