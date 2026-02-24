import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const cards = [
    {
      title: "Profile",
      description: "View and update your personal information.",
      icon: "👤",
    },
    {
      title: "Analytics",
      description: "Track your recent activity and performance metrics.",
      icon: "📊",
    },
    {
      title: "Settings",
      description: "Customize your preferences and security settings.",
      icon: "⚙️",
    },
    {
      title: "Projects",
      description: "Manage your ongoing projects and collaborations.",
      icon: "📁",
    },
    {
      title: "Notifications",
      description: "Stay up to date with alerts and system updates.",
      icon: "🔔",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
            MyApp
          </h1>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="rounded-full w-10 h-10 border border-gray-300"
            />
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-gray-600 hover:text-red-500 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-12 px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
          Welcome back, <span className="text-indigo-600">User</span> 👋
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Explore your dashboard to manage your projects, check analytics, and
          update your settings — all in one place.
        </p>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
              {card.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {card.description}
            </p>
            <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
              Open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/70 backdrop-blur-sm py-4">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
