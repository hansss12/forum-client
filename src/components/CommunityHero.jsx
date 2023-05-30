import { useNavigate } from "react-router-dom";

export default function CommunityHero() {
    const navigation = useNavigate();
    const handleLogin = () => {
      if (localStorage.getItem("x-auth-token")) {
        navigation("/forum")
      } else {
        navigation("/login")
      }
    }
    return (
        <>
            <section className="bg-white dark:bg-gray-900 mt-8" id="About">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-4xl lg:text-4xl dark:text-white font-serif">
                        Community
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-l px-16 dark:text-gray-400">
                        Welcome to our inclusive and vibrant community, where
                        diverse individuals come together to create a warm and
                        inviting environment. With a strong sense of belonging,
                        we foster unity, engage in civic initiatives, and
                        celebrate multiculturalism. From educational
                        opportunities to recreational activities, there's always
                        something exciting happening. Join us in this
                        extraordinary community, where connections are forged,
                        dreams are nurtured, and everyone belongs.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <button
                            type="button"
                            onClick={() => {
                              handleLogin()
                            }}
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#e7373b] hover:bg-[#bb2629] focus:ring-4 focus:ring-[#f23f42] dark:focus:ring-[#fc393c]"
                        >
                            Get started
                            <svg
                                aria-hidden="true"
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
