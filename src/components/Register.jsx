import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
            <div className="flex min-h-full flex-1 flex-col justify-start mt-20">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-4xl font-medium leading-9 tracking-tight text-gray-900">
                        Get Started Now
                    </h2>
                    <h4 className="mt-4">
                        Register your credential to grant your account
                    </h4>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
                    <form
                        className="space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={register}
                    >
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
                                    className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4253ef] sm:text-sm sm:leading-6"
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
                                    className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4253ef] sm:text-sm sm:leading-6"
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
                                        className="font-semibold text-[#4253ef] hover:text-[#4253ef]"
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
                                    className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4253ef] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-xl bg-[#4253ef] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4253ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4253ef]"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-start text-sm text-gray-500">
                        Have an account ?{" "}
                        <Link
                            to={"/login"}
                            className="font-semibold leading-6 text-[#4253ef] hover:text-[#4253ef]"
                        >
                            {" "}
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
