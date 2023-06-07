import { useState } from "react";
import { postData } from "../../store/actions/action";
import { useDispatch } from "react-redux";

export default function Modal() {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({
      title: "",
      description: ""
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const postThread = async (event) => {
        event.preventDefault();
        setShowModal(false);
        const res = await dispatch(postData("threads", form, "POST"));
        if (!res.success) {
            throw new Error(res.message)
        }
        setForm({
            title: "",
            description: "",
        });
    }
    return (
        <>
            <button
                className="text-white py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <div className="flex">
                    <h1 className="font-bold uppercase text-sm mr-3">
                        post thread{" "}
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-white text-xl font-bold"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Post A Thread
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <form onSubmit={postThread}>
                                    <div className="w-[50vw] mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 mt-5 p-5">
                                        <label
                                            htmlFor="input-group-1"
                                            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                        >
                                            Title
                                        </label>
                                        <div className="relative mb-6">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="input-group-1"
                                                name="title"
                                                onChange={handleChange}
                                                value={form.title}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#5441d7] focus:border-[#5441d7] block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Write a title..."
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <h1 className="text-black text-lg font-medium">
                                                Description
                                            </h1>
                                        </div>
                                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                            <label
                                                htmlFor="comment"
                                                className="sr-only"
                                            >
                                                Your comment
                                            </label>
                                            <textarea
                                                id="comment"
                                                rows="4"
                                                name="description"
                                                value={form.description}
                                                onChange={handleChange}
                                                className="w-full px-0 focus:ring-[#5441d7] focus:border-[#5441d7]  text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                                placeholder="Write a thread..."
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="sr-only">
                                                    Write Thread
                                                </span>
                                            </button>
                                            <div className="flex pl-0 space-x-1 sm:pl-2">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Attach file
                                                    </span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Set location
                                                    </span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Upload image
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Post Thread
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
