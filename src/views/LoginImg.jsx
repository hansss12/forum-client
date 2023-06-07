import Login from "../components/Login";
import landing from "../assets/landing.png";

export default function LoginImg() {
  return (
      <>
          <div className="grid grid-cols-2 p-5 h-[100vh]">
              <Login />
              <div className="flex bg-[#4253ef] rounded-xl justify-start p-20">
                  <div>
                      <h1 className="text-white text-3xl font-light">
                          The simplest way to express yourself and interact with
                          others
                      </h1>
                      <h1 className="text-white text-sm font-extralight pt-2">
                          Enter your credential to access your accounts
                      </h1>
                      <img src={landing} alt="image" className="w-full h-3/4" />
                      <p className="mt-20 text-center text-sm text-white items-end">
                          © 2023 GARUDA. All Rights Reserved.
                      </p>
                  </div>
              </div>
          </div>
      </>
  );
}