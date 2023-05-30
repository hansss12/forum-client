import { Link, useNavigate } from "react-router-dom";
import forumLogo from "../assets/forumLogo.png";
import { useEffect, useState } from "react";
import { postData } from "../store/actions/action";
import { useDispatch } from "react-redux";

export default function Register() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigation = useNavigate();

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };
    const register = async (event) => {
        event.preventDefault();
        const res = await dispatch(postData("auth/signUp", form, "POST")); 
        if (!res.success) {
            throw new Error(res.message)
        }
        setForm({
            username: "",
            email: "",
            password: "",
        });
        return navigation("/login")
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto w-auto h-40"
                        src={forumLogo}
                        alt="Your Company"
                    />
                    <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Hello There
                    </h2>
                    <h4 className="text-center mt-4">
                        Register your account please
                    </h4>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={register}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="username"
                                    placeholder="Jhon"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    placeholder="jhondoe@gmail.com"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-sky-500 hover:text-sky-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        One of us?{" "}
                        <Link
                            to={"/login"}
                            className="font-semibold leading-6 text-sky-500 hover:text-sky-500"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
