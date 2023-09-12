import React from "react";
import loginImage from '../assets/pexels-alex-qian.jpg';

export default function Login() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
            <div className="hidden sm:block overflow-hidden">
                <img className="h-screen" src={loginImage} alt="loginImage" />
            </div>

            <div className="bg-gray-700 flex flex-col justify-center items-center">
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded">
                    <h1 className="text-4xl dark:text-white text-center font-bold">SIGN IN</h1>
                    <div className="flex flex-col text-gray-500 py-2">
                        <label >Email</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type='email'/>
                    </div>
                    <div className="flex flex-col text-gray-500 py-2">
                        <label >Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type='password'/>
                    </div>
                    <div className="text-gray-500 flex justify-between mt-2">
                        <p ><input type='checkbox' /> Remember me</p>
                        <p >Forget Password?</p>
                    </div>
                    <button className="text-white font-semibold w-full bg-teal-400 my-5 py-2 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-lg">Sign In</button>
                </form>
            </div>
        </div>
    )
}