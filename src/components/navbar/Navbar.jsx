import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const NavbarItems = () => (
	<>
		<p>
			<a href="#home">Home</a>
		</p>
		<p>
			<a href="#what">What is GPT3?</a>
		</p>
		<p>
			<a href="#features">Case Studies</a>
		</p>
		<p>
			<a href="#possibility">Open AI</a>
		</p>
		<p>
			<a href="#library">Library</a>
		</p>
	</>
);

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false);

	return (
		<div className="navbar">
			<div className="navbar-links">
				<div className="logo">
					<img src={logo} alt="GPT3 logo" />
				</div>
				<div className="navbar-items-container">
					<NavbarItems />
				</div>
				<div className="navbar-sign">
					<p>Sign In</p>
					<button type="button">Sign Up</button>
				</div>
				<div className="mobile-menu">
					{toggleNav ? (
						<RiCloseLine
							color="#fff"
							size={27}
							onClick={() => setToggleNav(false)}
						/>
					) : (
						<RiMenu3Line
							color="#fff"
							size={27}
							onClick={() => setToggleNav(true)}
						/>
					)}

					{toggleNav && (
						<div className="mobile-menu-container scale-up-center">
							<div className="mobile-menu-container-items">
								<NavbarItems />
							</div>
							<div className="mobile-menu_container-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
