import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "wouter";
import { isLoggedIn, userState } from "../atoms/userAtom";
import ActiveLink from "../utils/ActiveLink";

function Header() {
  const isLogged = useRecoilValue(isLoggedIn);
  return (
    <nav className='w-full shadow-md rounded-box'>
      <div className='container mx-auto'>
        <div className='navbar bg-base-100 sm:pr-10 lg:p-[0.5rem]'>
          <div className='navbar-start'>
            <div className='dropdown md:hidden'>
              <label tabIndex={0} className='btn btn-ghost'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='p-2 border border-base-200 shadow menu dropdown-content bg-base-100 rounded-box w-52'
              >
                <li>
                  <ActiveLink href='/'>Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink href='/courses'>Courses</ActiveLink>
                </li>
                <li>
                  <ActiveLink href='/tests'>Tests</ActiveLink>
                </li>
                <li>
                  <ActiveLink href='/podcasts'>Podcasts</ActiveLink>
                </li>
                <li>
                  <ActiveLink href='/library'>Library</ActiveLink>
                </li>
              </ul>
            </div>
            <Link href='/' className='btn btn-ghost normal-case text-xl'>
              Tuna
            </Link>
          </div>
          <div className='navbar-end hidden md:flex'>
            <ul className='menu menu-horizontal items-center text-base space-x-3 p-0'>
              <li>
                <ActiveLink href='/'>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink href='/courses'>Courses</ActiveLink>
              </li>
              <li>
                <ActiveLink href='/tests'>Tests</ActiveLink>
              </li>
              <li>
                <ActiveLink href='/podcasts'>Podcasts</ActiveLink>
              </li>
              <li>
                <ActiveLink href='/library'>Library</ActiveLink>
              </li>
              {!isLogged ? (
                <div className='btn'>
                  <ActiveLink href='/login'>login</ActiveLink>
                </div>
              ) : (
                <div className='dropdown dropdown-end'>
                  <label
                    tabIndex={0}
                    className='btn btn-ghost btn-circle avatar'
                  >
                    <div className='w-10 rounded-full'>
                      <img src='https://api.lorem.space/image/face?hash=33791' />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className='p-1 mt-3 border text-sm border-base-300 shadow menu dropdown-content bg-base-100 min-w-max w-48 rounded-box'
                  >
                    <li className='w-full'>
                      <ActiveLink className='w-full' href='/profile'>
                        My Profile
                      </ActiveLink>
                    </li>
                    <li className='w-full self-center text-center'>
                      <a className='w-full text-center'>Log out</a>
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>
          <div className='md:hidden navbar-end'>
            {!isLogged ? (
              <div className='btn'>
                <ActiveLink href='/login'>login</ActiveLink>
              </div>
            ) : (
              <div className='dropdown dropdown-end'>
                <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                    <img src='https://api.lorem.space/image/face?hash=33791' />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
                >
                  <li className='w-full'>
                    <ActiveLink className='w-full' href='/profile'>
                      My Profile
                    </ActiveLink>
                  </li>
                  <li className='w-full self-center text-center'>
                    <a className='w-full text-center'>Log out</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
