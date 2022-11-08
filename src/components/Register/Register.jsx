import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "../../routes/AuthProvider";
import useTitle from "../../useTitle/UseTitle";

const Register = () => {
  useTitle("Register");
  const {
    user,
    handleSignUp,
    updateUserProfile,
    handleGooglesignIn,
    handleGithubsignIn,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [password, setPassword] = useState("");

  const handlePassword = (e) => {
    console.log(e.target.value);
    const password = e.target.value;
    const lengthtest = password.length < 6;
    const noCapital = !/(?=.*[A-Z])/.test(password);
    const noSpecial = !/(?=.*[!@#$&*])/.test(password);

    if (noCapital) {
      setError("Password should contain one capital letters");
    } else if (noSpecial) {
      setError("Password should contain one special characters");
    } else if (lengthtest) {
      setError("Password length should be at least 6 characters");
    } else {
      setError("");
      setPassword(password);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;

    // registration
    handleSignUp(email, password)
      .then((result) => {
        const user = result.user;
        setUserInfo(photoURL, displayName);

        toast.success("Congratulation your accounts has been created");

        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
        form.reset();
      });
  };

  const setUserInfo = (photoURL, displayName) => {
    const profile = {
      photoURL: photoURL,
      displayName: displayName,
    };
    updateUserProfile(profile);
  };

  //   handleGoogle
  const handleGoogleclick = () => {
    handleGooglesignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        toast.info("logged in with Google ID");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // handleGithub
  const handleGithubclick = () => {
    handleGithubsignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        toast.info("logged in with Github ID");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className=" bg-slate-600 py-24 px-10 md:px-10">
      <div className=" md:w-2/5 mx-auto p-8 space-y-3 rounded-xl bg-gradient-to-tr from-cyan-700 via-gray-900 to-sky-700 text-gray-100 ">
        <h1 className="text-2xl font-bold text-center">Registration Form</h1>
        <form
          noValidate=""
          onSubmit={handleSubmit}
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label
              htmlFor="username"
              className="block dark:text-gray-400 text-left"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="photoURL"
              className="block dark:text-gray-400 text-left"
            >
              PhotoURL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="photoURL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="email"
              className="block dark:text-gray-400 text-left"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800 focus:dark:border-violet-400"
            />
          </div>
          <p>
            <small className="text-red-500">{error.email}</small>
          </p>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="password"
              className="block dark:text-gray-400 text-left"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePassword}
              required
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800 focus:dark:border-violet-400"
            />
          </div>
          {error && (
            <p>
              <small className="text-red-500">{error}</small>
            </p>
          )}
          <button className="block w-full p-3 text-center rounded-md text-gray-900 font-medium bg-gradient-to-tl from-blue-200 via-red-500 to-cyan-500 duration-150 hover:bg-gradient-to-r from-transparent via-cyan-700 to-rose-500">
            Register
          </button>
        </form>

        <div className="flex justify-center space-x-4">
          <button
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
            onClick={handleGoogleclick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>

          <button
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
            onClick={handleGithubclick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link to="/login" className="underline dark:text-gray-100 mx-3">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
