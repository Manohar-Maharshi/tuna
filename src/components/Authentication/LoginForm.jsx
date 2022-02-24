import React, { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

function LoginForm({ setToggleAuthForm }) {
  const [toggleForgotForm, setToggleForgotForm] = useState(false);

  return (
    <>
      {!toggleForgotForm ? (
        <form>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='youremail@gmail.com'
              className='input input-bordered input-secondary'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='text'
              placeholder='password'
              className='input input-bordered input-secondary'
            />
            <label className='label'>
              <span
                onClick={() => setToggleForgotForm(true)}
                className='label-text-alt link link-hover'
              >
                Forgot Password...?
              </span>
              <span
                onClick={() => setToggleAuthForm(true)}
                className='label-text-alt link-primary link link-hover'
              >
                Register New Account!
              </span>
            </label>
          </div>
          <div className='form-control mt-4'>
            <button className='btn btn-primary'>Login</button>
          </div>
        </form>
      ) : (
        <ForgotPasswordForm setToggleForgotForm={setToggleForgotForm} />
      )}
    </>
  );
}

export default LoginForm;
