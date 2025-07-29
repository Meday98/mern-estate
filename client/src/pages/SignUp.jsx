import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg p-3 mb-4 w-80"
            id="username"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 mb-4 w-80"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300  rounded-lg p-3 mb-4 w-80"
            id="password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex gap-2 mt-5 justify-center">
        <p>Have an account?</p>
        <Link to={"/sign-in"} className="text-blue-500 hover:underline">
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  );
}
