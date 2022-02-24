import React from "react";

function RegisterForm({ setToggleAuthForm }) {
  return (
    <form>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Username</span>
        </label>
        <input
          type='text'
          placeholder='yourname'
          className='input input-bordered input-secondary'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Email</span>
        </label>
        <input
          type='email'
          placeholder='youremail@gmail.com'
          className='input input-bordered input-secondary'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Password</span>
        </label>
        <input
          type='password'
          placeholder='password'
          className='input input-bordered input-secondary'
        />
        <label className='label'>
          <span
            onClick={() => setToggleAuthForm(false)}
            className='label-text-alt link-primary link link-hover'
          >
            Already have Account..!
          </span>
        </label>
      </div>
      <div className='form-control mt-4'>
        <button className='btn btn-primary'>Register</button>
      </div>
    </form>
  );
}

export default RegisterForm;
