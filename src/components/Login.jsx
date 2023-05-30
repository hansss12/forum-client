import { Link, useNavigate } from "react-router-dom";
import forumLogo from "../assets/forumLogo.png"
import { useState } from "react";
import { postData } from "../store/actions/action";
import { useDispatch } from "react-redux";

export default function Login() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const navigation = useNavigate()

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const login = async (event) => {
        event.preventDefault();
        const res = await dispatch(postData("auth/Signin", form, "POST", "login"));
        if (!res.success) {
            throw new Error(res.message)
        }
        setForm({
            email: "",
            password: ""
        })
        return navigation("/forum")
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto w-auto h-40"
                        src={forumLogo}
                        alt="Your Company"
                    />
                    <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Welcome Back !
                    </h2>
                    <h4 className="text-center mt-4">Sign to your account</h4>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={login}
                    >
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
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{" "}
                        <Link
                            to={"/register"}
                            className="font-semibold leading-6 text-sky-500 hover:text-sky-500"
                        >
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
