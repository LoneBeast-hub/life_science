import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";  // Import Firebase Auth methods
import { auth } from "../../firebase/firebase";  // Import auth from firebase config
import Header from "../../components/header/header.component";

const AdminAuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Authenticate the user with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the logged-in user is the admin
      if (user.uid === "lTMleO25eHdQMTWvrZKBxsOgzBX2") {
        navigate("/admin_dashboard");  // Redirect to admin dashboard if user is admin
      } else {
        setError("You are not authorized to access the admin dashboard.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <Header fixed />
      <div className="border border-[#bababa] sm:w-[400px] p-[20px] mt-[120px] mb-[40px] w-[90%] mx-auto">
        <h1 className="text-6xl font-bold text-center mb-[30px]">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-[20px]">
          <input
            type="email"
            placeholder="Email"
            className="text-[1.6rem] border border-[#bababa] w-full py-[5px] px-[10px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="text-[1.6rem] border border-[#bababa] w-full py-[5px] px-[10px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="hover:text-black hover:bg-transparent text-white bg-black border-black transition-all border text-[1.2rem] py-[1.4rem] px-[3rem] w-full">
            Submit
          </button>
        </form>
        {error && <p className="text-[1.6rem] text-red-500 mt-4">{error}</p>}
      </div>
    </>
  );
};

export default AdminAuthPage;