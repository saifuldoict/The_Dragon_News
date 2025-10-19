import React,{useState} from "react";

import MyContainer from "../components/MyContainer";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";



const googleProvider = new GoogleAuthProvider()


const Login = () => {
const [user, setUser] = useState(null);
const [show, setShow] = useState(false);
  

const handleSignin = (e) => {
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;

   signInWithEmailAndPassword(auth, email, password)
   .then((res) => {
    console.log(res);
    setUser(res.user);
    toast.success("Signin successful");
   })
   .catch((e) => {
    console.log(e);
    toast.error(e.message);
   });
    
  };

  const handleGoogleSignin = () => {
   console.log("google signin");
    signInWithPopup(auth, googleProvider)
    .then((res) => {
      console.log(res);
      setUser(res.user);
      toast.success("Google Signin successful");
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.message);
    });
  };

  const handleSignout = () => {
   signOut(auth)
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      }); 
  };

  return (
    <div className="flex justify-center min-h-screen items-center mx-auto bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
    

    
        <div className="relative z-10  justify-center items-center mx-auto">
          

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
          {
            user ? (<div className="text-center space-y-3">
               <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-20 w-20 rounded-full mx-auto"
                  alt=""
                />
                 <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="text-white/80">{user?.email}</p>
                 <button onClick={handleSignout} className="my-btn">
                  Sign Out
                </button>
            </div>) : (
               <form onSubmit={handleSignin} className="space-y-5">
                <h2 className="text-2xl font-semibold mb-2 text-center ">
                  Login your account
                </h2>

                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type={show ? 'text':"password"}
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <span
                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                    onClick={()=> setShow(!show)}
                  >
                 {show ? <IoEyeOff size={20} /> : <FaEye size={20} />}
                  </span>
                </div>

                <button type="submit" className="my-btn">
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                <p className="text-center text-sm text-gray/80 mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/auth/register"
                    className="text-pink-300 hover:text-white underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            )
          }
             
  
          </div>
        </div>
     
    </div>
  );
};

export default Login;