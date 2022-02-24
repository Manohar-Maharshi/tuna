import React, { useState } from "react";
import { Icon } from "@iconify/react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthForm() {
  const [toggleAuthForm, setToggleAuthForm] = useState(true);

  return (
    <div className=' card flex-shrink-0 w-full border border-base-200 max-w-sm shadow-xl bg-base-100'>
      <div className='card-body'>
        {!toggleAuthForm ? (
          <LoginForm setToggleAuthForm={setToggleAuthForm} />
        ) : (
          <RegisterForm setToggleAuthForm={setToggleAuthForm} />
        )}

        <div className='divider'>OR</div>
        <div className='form-control'>
          <button className='btn btn-primary'>
            {" "}
            <Icon
              icon='akar-icons:google-fill'
              className='mr-2 -ml-1 w-5 h-5'
            />
            {!toggleAuthForm ? "Sign in with Google" : "Register with Google"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
