import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
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

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <img src={user} alt="user" className="w-[20px] inline-block mr-2"/>
          <Link to={"/auth/login"}>Login</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;