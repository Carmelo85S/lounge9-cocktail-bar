import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(username === "admin" && password === "admin123"){
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin");
    }else{
      setError("Wrong user and/or password")
    }
  }

  return (
     <section className="min-h-screen flex items-center justify-center bg-cream font-sans px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border border-amber-dark"
      >
        <h2 className="text-2xl font-serif text-night mb-6 text-center">Accesso Admin</h2>

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
  )
}

export default Login
