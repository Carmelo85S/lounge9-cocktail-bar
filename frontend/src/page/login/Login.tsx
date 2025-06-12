import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream font-sans px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border border-amber-dark"
      >
        <h2 className="text-2xl font-serif text-night mb-6 text-center">Admin access</h2>

        {/* DEMO CREDENTIALS */}
        <div className="mb-6 bg-amber/10 border border-amber text-amber-dark rounded-md p-3 text-sm">
          <p><strong>Demo login</strong></p>
          <p>Username: <code>admin</code></p>
          <p>Password: <code>admin123</code></p>
        </div>

        <label htmlFor="username" className="block text-night mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 border border-night rounded-lg bg-cream focus:outline-none focus:ring-2 focus:ring-amber-dark"
          placeholder="admin"
        />

        <label htmlFor="password" className="block text-night mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border border-night rounded-lg bg-cream focus:outline-none focus:ring-2 focus:ring-amber-dark"
          placeholder="••••••••"
        />

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-amber hover:bg-amber-dark text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
