import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import userImg from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user, logOut}=use(AuthContext);
  const handleLogOut =()=>{
 
    logOut()
    .then(() => {
      toast("Your logout successfull")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log(error)
});
  }
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <div>{user && user.email}</div>
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2 text-accent">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about_us"}>About</MyLink>
          </li>
          <li>
            <MyLink to={"/career"}>Career</MyLink>
          </li>
        </ul>
          <div>
            <img src={`${user ?user.photoURL :userImg}`} alt="user" className="w-[20px] inline-block mr-2 rounded-full"/>      
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          
          {user? (<button onClick={handleLogOut}>logout</button> ):(<Link to={"/auth/login"}>Login</Link>)}
          
        </button>
          </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;