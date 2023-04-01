import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const inputStyle =
    "font-semibold py-3 px-5 border-neutralGrayishBlue placeholder:text-neutralGrayishBlue border w-11/12 rounded-lg focus:invalid:border-primaryRed focus:invalid:text-primaryRed  focus:outline-none valid:border-primaryGreen";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    message: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      message: true,
    });
  }

  function handleClose() {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        message: false,
      };
    });
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="bg-primaryRed  bg-[url('/images/bg-intro-mobile.png')] relative w-screen h-full md:h-screen">
        {formData.message ? (
          <div className=" bg-primaryRed w-screen h-screen z-10 absolute top-0 left-0 px-10 justify-center flex flex-col gap-10 items-center ">
            <h1 className="text-3xl font-semibold text-white text-center">
              Thanks for signing up!
            </h1>
            <div
              className="rounded-2xl bg-white w-3/4 h-12 flex items-center justify-center md:w-44 hover:cursor-pointer hover:bg-neutralDarkBlue hover:text-white"
              onClick={handleClose}
            >
              <p className="font-semibold">Close</p>
            </div>
          </div>
        ) : (
          <div className="w-screen h-full py-20 flex flex-col gap-10 md:flex-row md:items-center md:px-20">
            <div className="flex flex-col gap-5 md:w-1/2 px-7">
              <h1 className="text-white text-3xl font-bold md:text-left md:text-4xl text-center">
                Learn to code by watching others
              </h1>
              <p className="text-white font-normal md:text-left text-center">
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
              </p>
            </div>

            <div className="flex flex-col gap-5 px-5 md:w-1/2">
              <div
                id="button"
                className="bg-accentBlue py-3 px-10 leading-7 rounded-xl  text-center"
              >
                <p className="text-white">
                  <span className="font-semibold">Try it free 7 days</span> then
                  $20/mo. thereafter
                </p>
              </div>
              <form
                className="bg-white rounded-xl flex flex-col items-center py-6 px-2 gap-4 shadow-[0px_9px_0px_0px_rgba(26,32,44,.15)]"
                onSubmit={handleSubmit}
              >
                <div className="w-full flex items-center relative justify-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    className={inputStyle}
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    required
                  />
                </div>
                <div className="w-full flex items-center relative justify-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={inputStyle}
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    required
                  />
                </div>
                <div className="w-full flex items-center relative justify-center">
                  <input
                    type="email"
                    placeholder="email"
                    className={inputStyle}
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    required
                  />
                </div>
                <div className="w-full flex items-center relative justify-center">
                  <input
                    type="text"
                    placeholder="Password"
                    className={inputStyle}
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    required
                  />
                </div>

                <button className="bg-primaryGreen text-white rounded-lg font-medium w-11/12 py-3 shadow-[0px_4px_0px_0px_rgba(43,166,113,.9)] hover:bg-[#61d6a3]">
                  CLAIM YOUR FREE TRIAL
                </button>
                <p className="text-sm text-neutralGrayishBlue w-10/12 text-center">
                  By clicking the button, you are agreeing to our
                  <span className="text-primaryRed font-semibold">
                    Terms and Services
                  </span>
                </p>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
