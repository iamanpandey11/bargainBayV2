import React from "react";
import { Button, TextInput } from "flowbite-react";
import { useLocation, useNavigate, Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import logo from "../images/logo.jpeg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo.jsx";
import { SearchIcon } from "./SearchIcon.jsx";
export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
    // alert("sign out done");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    // <Navbar className="border-b-2">
    //   <Link
    //     to="/"
    //     className="self-center whitespace-nowrap text-sm sm:text-xl
    //     font-semibold dark:text-white"
    //   >
    //     <img src={logo} alt="image" className="h-20" />
    //   </Link>

    //   <form onSubmit={handleSubmit}>
    //     <TextInput
    //       type="text"
    //       placeholder="Search..."
    //       rightIcon={AiOutlineSearch}
    //       className="hidden lg:inline"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //   </form>
    //   <Button className="w-12 h-10 lg:hidden" color="gray" pill>
    //     <AiOutlineSearch />
    //   </Button>
    //   <div className="flex gap-2 md:order-2">
    //     <Button
    //       className="w-12 h-10 hidden sm:inline"
    //       color="gray"
    //       pill
    //       onClick={() => dispatch(toggleTheme())}
    //     >
    //       {theme === "light" ? <FaSun /> : <FaMoon />}
    //     </Button>
    //     {currentUser ? (
    //       <Dropdown
    //         arrowIcon={false}
    //         inline
    //         label={
    //           <Avatar alt="user" img={currentUser.profilePicture} rounded />
    //         }
    //       >
    //         <Dropdown.Header>
    //           <span className="block text-sm">@{currentUser.username}</span>
    //           <span className="block text-sm font-medium truncate">
    //             {currentUser.email}
    //           </span>
    //         </Dropdown.Header>
    //         <Link to={"/dashboard?tab=profile"}>
    //           <Dropdown.Item>Profile</Dropdown.Item>
    //         </Link>
    //         <Dropdown.Divider />
    //         <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
    //       </Dropdown>
    //     ) : (
    //       <Link to="/sign-in">
    //         <Button gradientDuoTone="purpleToBlue" outline>
    //           Sign In
    //         </Button>
    //       </Link>
    //     )}
    //     <Navbar.Toggle />
    //   </div>

    //   <Navbar.Collapse>
    //     <Navbar.Link active={path === "/"} as={"div"}>
    //       <Link to="/">Home</Link>
    //     </Navbar.Link>
    //     <Navbar.Link active={path === "/about"} as={"div"}>
    //       <Link to="/about">About</Link>
    //     </Navbar.Link>
    //     <Navbar.Link active={path === "/mobile"} as={"div"}>
    //       <Link to="/mobile">Mobiles</Link>
    //     </Navbar.Link>
    //     <Navbar.Link active={path === "/laptop"} as={"div"}>
    //       <Link to="/laptop">Laptop</Link>
    //     </Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar isBordered={true} isBlurred={false} className="flex justify-evenly">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">BargainBay</p>
        </NavbarBrand>
        {currentUser && (
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <NavLink
                to="/"
                color="foreground"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500" : ""
                }
              >
                Home
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink
                to="/mobile"
                color="foreground"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500" : ""
                }
              >
                Mobile
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink
                color="foreground"
                to="/laptop"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500" : ""
                }
              >
                Laptop
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink
                color="foreground"
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500" : ""
                }
              >
                About
              </NavLink>
            </NavbarItem>
          </NavbarContent>
        )}
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="w-[200px] lg:w-[200px] xl:w-[200px] inline-block sm:w-[100px] md:w-[100px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        {currentUser ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={currentUser.profilePicture}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{currentUser.email}</p>
              </DropdownItem>
              <DropdownItem key="link">
                <Link to={"/dashboard?tab=profile"}>Profile</Link>
              </DropdownItem>
              <DropdownItem key="team_settings">
                <Link to="/">Home</Link>
              </DropdownItem>
              <DropdownItem key="analytics">
                <Link to="/mobile">Mobile</Link>
              </DropdownItem>
              <DropdownItem key="system">
                <Link to="laptop">Laptop</Link>
              </DropdownItem>
              <DropdownItem key="configurations">
                <Link to="/about">About</Link>
              </DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem onClick={handleSignout} key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
      </NavbarContent>
    </Navbar>
  );
}
