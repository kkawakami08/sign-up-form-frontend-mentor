import Head from "next/head";

export default function Home() {
  //normal, medium, semibold, bold
  const inputStyle =
    "font-semibold py-3 px-5 border-neutralGrayishBlue placeholder:text-neutralGrayishBlue border w-11/12 rounded-lg";
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="bg-primaryRed h-full bg-[url('../public/images/bg-intro-mobile.png')] flex flex-col items-center px-7 py-20 text-center gap-16">
        <div className="flex flex-col items-center gap-7">
          <h1 className="text-white text-3xl font-bold ">
            Learn to code by watching others
          </h1>
          <p className="text-white font-medium">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div
            id="button"
            className="bg-accentBlue py-3 px-10 leading-7 rounded-xl shadow-[0px_9px_0px_0px_rgba(26,32,44,.15)]"
          >
            <p className="text-white">
              <span className="font-semibold">Try it free 7 days</span> then
              $20/mo. thereafter
            </p>
          </div>
          <form className="bg-white rounded-xl flex flex-col items-center py-5 px-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className={inputStyle}
            />
            <input type="text" placeholder="Last Name" className={inputStyle} />
            <input type="email" placeholder="Email" className={inputStyle} />
            <input
              type="password"
              placeholder="Password"
              className={inputStyle}
            />
            <button className="bg-primaryGreen text-white rounded-lg font-medium w-11/12 py-3 shadow-[0px_9px_0px_0px_rgba(26,32,44,.15)]">
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
