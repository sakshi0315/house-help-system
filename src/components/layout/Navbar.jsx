import { Link } from "react-router-dom";
import Button from "../common/Button";

function Navbar() {
  return (
    <nav
      className="
      glass
      sticky
      top-0
      z-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        {/* Logo */}

        <h1
          className="
          text-2xl
          font-bold
          gradient-text
          "
        >
          SmartHelper
        </h1>

        {/* Menu */}

        <div
          className="
          hidden
          md:flex
          gap-8
          "
        >
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Auth Button */}

        <Link to="/auth">
          <Button>
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;