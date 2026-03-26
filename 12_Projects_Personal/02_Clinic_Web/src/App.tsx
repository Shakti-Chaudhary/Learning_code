import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ProtectedRoute } from './routes/ProtectedRoute';

const LoginPage = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-gray-900 to-slate-800">
      
      {/* Animated Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

      {/* Login Card */}
      <div className="z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 w-87.5 animate-fadeIn">
        
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Welcome Back 👋
        </h1>

        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        <button className="w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition text-white font-semibold">
          Login
        </button>

        <p className="text-sm text-gray-300 mt-4 text-center">
          Secure access only
        </p>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to your Secure Dashboard 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-gray-700">Users</h2>
          <p className="text-2xl font-bold mt-2">1,024</p>
        </div>

        <div className="p-4 rounded-xl bg-white shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-gray-700">Revenue</h2>
          <p className="text-2xl font-bold mt-2">$12,340</p>
        </div>

        <div className="p-4 rounded-xl bg-white shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-gray-700">Active Sessions</h2>
          <p className="text-2xl font-bold mt-2">87</p>
        </div>
      </div>
    </div>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Feature Routes */}
        <Route element={<ProtectedRoute roles={['ADMIN']} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardHome />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
