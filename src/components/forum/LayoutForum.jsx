import { useSelector } from "react-redux";
import logo from "../../assets/143.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import Modal from "./modal";

export default function LayoutForum() {
  const community = useSelector((state) => {
    return state.profileReducer.community;
  })
  const profile = useSelector((state) => {
      return state.profileReducer.profile;
  });
  const navigation = useLocation();

  const inactive = "flex mt-7 cursor-pointer";
  const active = "flex mt-7 cursor-pointer rounded-full bg-white mr-3";
  return (
      <div className="grid grid-cols-6 bg-[#f1eff3]">
          <div className="border-r-2">
              <div className="ml-[3rem]">
                  {/* sidebar */}
                  <Link to={"/forum/"}>
                      <div
                          className={
                              navigation.pathname == "/forum/" ||
                              navigation.pathname == "/forum" ||
                              navigation.pathname.includes("6")
                                  ? active
                                  : inactive
                          }
                      >
                          <div className="rounded-full bg-[#f9f9f9] p-2">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-6 h-6 text-[#a4a4a4] text-xl"
                              >
                                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                              </svg>
                          </div>
                          <div className="mt-2 pl-5">
                              <h1 className="text-center">Home</h1>
                          </div>
                      </div>
                  </Link>
                  <Link to={"/forum/top"}>
                      <div
                          className={
                              navigation.pathname == "/forum/top"
                                  ? active
                                  : inactive
                          }
                      >
                          <div className="rounded-full bg-[#f9f9f9] p-2">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-6 h-6 text-[#a4a4a4] text-xl"
                              >
                                  <path
                                      fillRule="evenodd"
                                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                      clipRule="evenodd"
                                  />
                              </svg>
                          </div>
                          <div className="mt-2 pl-5">
                              <h1 className="text-center">Top Thread</h1>
                          </div>
                      </div>
                  </Link>
                  <Link to={"/forum/saved"}>
                      <div
                          className={
                              navigation.pathname == "/forum/saved"
                                  ? active
                                  : inactive
                          }
                      >
                          <div className="rounded-full bg-[#f9f9f9] p-2">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-6 h-6 text-[#a4a4a4] text-xl"
                              >
                                  <path
                                      fillRule="evenodd"
                                      d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                      clipRule="evenodd"
                                  />
                              </svg>
                          </div>
                          <div className="mt-2 pl-5">
                              <h1 className="text-center">Saved</h1>
                          </div>
                      </div>
                  </Link>
                  {/* finish */}
              </div>
          </div>
          <div className="col-span-4 h-[90vh] w-full px-10 overflow-auto">
              <Outlet />
          </div>
          <div className="border-l-2">
              {/* add thread button */}
              <div className="flex rounded-xl bg-[#5441d7] mt-8 justify-center mx-5 p-3 cursor-pointer">
                  <Modal />
              </div>
              {/* finish */}
              <div className="mt-[3rem]">
                  {/* profile */}
                  <div className="flex justify-center">
                      <img
                          src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                          alt="profile"
                          className="lg:w-32 lg:h-32 w-12 h-12 rounded-xl"
                      />
                  </div>
                  <div className="flex justify-center mt-[1rem] font-serif">
                      <h1 className="text-lg">{profile.username}</h1>
                  </div>
                  <div className="mt-[1rem] bg-white rounded-xl mx-5 py-3">
                      <div className="flex justify-start w-full border-b-2 px-3 pb-2">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                          >
                              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                          </svg>

                          <h1 className="text-sm ml-3">{profile.email?.split("@")[0]}</h1>
                      </div>
                      <div className="flex justify-start w-full px-3 pt-2">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                  clipRule="evenodd"
                              />
                          </svg>

                          <h1 className="text-sm ml-3">Member</h1>
                      </div>
                  </div>
                  {/* finish */}
              </div>
              <div className="mt-[3rem] flex justify-center">
                  <img src={logo} alt="logo" className="w-32 h-32" />
              </div>
              <div className="flex justify-center mt-[10vh]">
                  <span className="text-xs text-gray-500 text-center">
                      © 2023 GARUDA. All Rights Reserved.
                  </span>
              </div>
          </div>
      </div>
  );
}