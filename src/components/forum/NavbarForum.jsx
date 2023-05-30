import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/142.jpg"

export default function NavbarForum() {
    const navigation = useNavigate();
    const handleLogout = (event) => {
        localStorage.removeItem("x-auth-token");
        navigation("/login");
    };
    const profile = useSelector((state) => {
        return state.profileReducer.profile;
    });
    return (
        <>
            <div className="flex justify-between mt-5 px-[3rem] pb-5">
                <div className="flex">
                    <div className="flex">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-6 h-6 mr-5 mt-1"
                        />
                        <h1 className="text-black font-extrabold text-3xl font-serif">
                            GARUDA
                        </h1>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div
                        className="flex justify-end bg-[#5441d7] hover:bg-[#3f2db0] rounded-lg cursor-pointer"
                        onClick={() => {
                            handleLogout();
                        }}
                    >
                        <div className="flex p-2 px-5">
                            <h1 className="text-white font-lg pr-2">Logout</h1>
                            <h1 className="text-white font-medium">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
