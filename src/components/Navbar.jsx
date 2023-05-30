import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigation = useNavigate()
    const handleLogout = (event) => {
        navigation("/login")
    }
    return (
        <>
            <div className="flex justify-between mt-10">
                <div className="flex">
                    <div className="border-r-4 border-b-[#7f8186] pr-10 ">
                        <h1 className="text-[#e7373b] font-extrabold text-3xl font-serif">
                            GARUDA
                        </h1>
                    </div>
                    <div className="px-7">
                        <h1 className="text-black text-xl font-semibold">
                            Home
                        </h1>
                    </div>
                    <div className="px-7">
                        <h1 className="text-black text-xl font-semibold">
                            Creator
                        </h1>
                    </div>
                    <div className="px-7">
                        <h1 className="text-black text-xl font-semibold">
                            Community
                        </h1>
                    </div>
                    <div className="px-7">
                        <h1 className="text-black text-xl font-semibold">
                            Subscribe
                        </h1>
                    </div>
                </div>
                <div
                    className="flex justify-end bg-[#e7373b] hover:bg-[#bb2629] rounded-lg cursor-pointer"
                    onClick={() => {
                        handleLogout();
                    }}
                >
                    <div className="flex p-2 px-5">
                        <h1 className="text-white font-lg pr-2">Login</h1>
                        <h1 className="text-white font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                            </svg>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#f5f5f5] w-full mt-10 rounded-xl pt-5">
                <div className="flex p-5 justify-center">
                    <h1 className="text-black text-xl font-light px-1">W</h1>
                    <h1 className="text-black text-xl font-light px-1">E</h1>
                    <h1 className="text-black text-xl font-light px-1">L</h1>
                    <h1 className="text-black text-xl font-light px-1">C</h1>
                    <h1 className="text-black text-xl font-light px-1">O</h1>
                    <h1 className="text-black text-xl font-light px-1">M</h1>
                    <h1 className="text-black text-xl font-light px-1">E</h1>
                    <h1 className="text-black text-xl font-light px-1"></h1>
                    <h1 className="text-black text-xl font-light px-1">T</h1>
                    <h1 className="text-black text-xl font-light px-1">O</h1>
                    <h1 className="text-black text-xl font-light px-1"></h1>
                    <h1 className="text-black text-xl font-light px-1">G</h1>
                    <h1 className="text-black text-xl font-light px-1">A</h1>
                    <h1 className="text-black text-xl font-light px-1">R</h1>
                    <h1 className="text-black text-xl font-light px-1">U</h1>
                    <h1 className="text-black text-xl font-light px-1">D</h1>
                    <h1 className="text-black text-xl font-light px-1">A</h1>
                </div>
                <div className="flex justify-center mb-2">
                    <h1 className="text-black font-semibold text-3xl px-1">
                        Craft narratives that ignite{" "}
                    </h1>
                    <h1 className="text-[#e7373b] font-semibold text-3xl px-1">
                        Inspiration
                    </h1>
                    <h1 className="text-black font-semibold text-3xl">,</h1>
                </div>
                <div className="flex justify-center pb-10">
                    <h1 className="text-[#e7373b] font-semibold text-3xl px-1">
                        Knowledge
                    </h1>
                    <h1 className="text-black font-semibold text-3xl">
                        , and{" "}
                    </h1>
                    <h1 className="text-[#e7373b] font-semibold text-3xl px-1">
                        Entertainment
                    </h1>
                </div>
            </div>
        </>
    );
}
