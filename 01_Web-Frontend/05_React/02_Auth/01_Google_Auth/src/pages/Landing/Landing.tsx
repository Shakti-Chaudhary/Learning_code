import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Normally this triggers Google OAuth flow
    navigate("/home");
  };

  return (
    <div className="h-screen flex flex-col items-center w-full justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
      <div className="flex flex-col gap-6 justify-center flex-1 w-full text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          Welcome to MyApp
        </h1>
        <p className="text-gray-600 mb-8">
          The easiest way to connect using Google OAuth.
        </p>

        <button
          onClick={handleLogin}
          className="flex self-center items-center gap-2 justify-center w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all max-w-md"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
