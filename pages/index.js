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

  console.log(formData.email);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="bg-primaryRed h-full bg-[url('../public/images/bg-intro-mobile.png')] flex flex-col items-center px-7 py-20 text-center gap-16 md:flex-row md:px-28">
        <div className="flex flex-col items-center gap-7 md:items-start md:w-1/2">
          <h1 className="text-white text-3xl font-bold md:text-left md:text-4xl">
            Learn to code by watching others
          </h1>
          <p className="text-white font-normal md:text-left ">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div
            id="button"
            className="bg-accentBlue py-3 px-10 leading-7 rounded-xl shadow-[0px_9px_0px_0px_rgba(26,32,44,.15)] hover:bg-[#6e64af] hover:cursor-pointer"
          >
            <p className="text-white">
              <span className="font-semibold">Try it free 7 days</span> then
              $20/mo. thereafter
            </p>
          </div>
          <form className="bg-white rounded-xl flex flex-col items-center py-6 px-2 gap-4 shadow-[0px_9px_0px_0px_rgba(26,32,44,.15)]">
            <input
              type="text"
              placeholder="First Name"
              className={inputStyle}
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className={inputStyle}
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={inputStyle}
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={inputStyle}
              onChange={handleChange}
              name="password"
              value={formData.password}
              required
            />
            <button className="bg-primaryGreen text-white rounded-lg font-medium w-11/12 py-3 shadow-[0px_4px_0px_0px_rgba(43,166,113,.9)] hover:bg-[#61d6a3]">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="text-sm text-neutralGrayishBlue w-10/12">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-primaryRed font-semibold">
                Terms and Services
              </span>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
