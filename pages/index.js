import Head from "next/head";

export default function Home() {
  //normal, medium, semibold, bold
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="bg-primaryRed h-screen bg-[url('../public/images/bg-intro-mobile.png')]">
        <div>
          <h1 className="text-white text-3xl font-semibold">
            Learn to code by watching others
          </h1>
          <p className="text-white font-medium">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div>
          <div id="button" className="bg-accentBlue ">
            <p className="text-white">
              <span className="font-semibold">Try it free 7 days</span> then
              $20/mo. thereafter
            </p>
          </div>
          <form className="bg-white">
            <input
              type="text"
              placeholder="First Name"
              className="font-semibold"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="font-semibold"
            />
            <input type="email" placeholder="Email" className="font-semibold" />
            <input
              type="password"
              placeholder="Password"
              className="font-semibold"
            />
            <button className="bg-primaryGreen text-white font-normal">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="text-sm text-neutralGrayishBlue">
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
