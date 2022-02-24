import React from "react";

function ForgotPasswordForm({ setToggleForgotForm }) {
  return (
    <form>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Reset Email</span>
        </label>
        <input
          type='text'
          placeholder='youremail@gmail.com'
          className='input input-bordered input-secondary'
        />
        <label className='label'>
          <span
            onClick={() => setToggleForgotForm(false)}
            className='label-text-alt link link-hover'
          >
            Remember Password...?
          </span>
        </label>
      </div>
      <div className='form-control mt-4'>
        <button className='btn btn-primary'>reset password</button>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
