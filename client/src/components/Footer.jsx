import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillDribbbleSquare,
} from "react-icons/ai";

export default function FooterCom() {
  return (
    <Footer container className="bg-gray-800 text-white">
      <div className="w-full max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Link to="/">
              <img src={logo} alt="image" className="h-20 mx-auto" />
            </Link>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="dummy"
                  className="hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Latest Gadget
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow us</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.github.com/iamanpandey11"
                  className="hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="#" className="mr-4 hover:text-blue-500">
            <AiFillFacebook size={24} />
          </a>
          <a href="#" className="mr-4 hover:text-blue-500">
            <AiOutlineInstagram size={24} />
          </a>
          <a href="#" className="mr-4 hover:text-blue-500">
            <AiOutlineTwitter size={24} />
          </a>
          <a
            href="https://github.com/iamanpandey11"
            className="mr-4 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={24} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <AiFillDribbbleSquare size={24} />
          </a>
        </div>
      </div>
    </Footer>
  );
}
