import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError("An error occurred while signing up. Please try again.");
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg p-3 mb-4 w-80"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 mb-4 w-80"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300  rounded-lg p-3 mb-4 w-80"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </form>
      <div className="flex gap-2 mt-5 justify-center">
        <p>Have an account?</p>
        <Link to={"/sign-in"} className="text-blue-500 hover:underline">
          <span>Sign in</span>
        </Link>
      </div>
      {error && (
        <div className="text-red-500 text-center mt-4">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
