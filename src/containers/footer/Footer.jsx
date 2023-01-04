import React from "react";
import {
	RiFacebookFill,
	RiTwitterFill,
	RiInstagramFill,
	RiSlackFill
} from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer section-padding" id="footer">
			<div className="footer-heading">
				<h1 className="gradient-text">
					Do you want to step in to the future before others
				</h1>
			</div>
			<div className="footer-btn">
				<p>Request Early Eccess</p>
			</div>
			<div className="footer-links">
				<div className="footer-links-logo">
					<img src={logo} alt="" />
					<p>
						Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
					</p>
				</div>
				<div className="footer-links-div">
					<h4>Company</h4>
					<p>Terms & Conditions </p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className="footer-links-div">
					<h4>Get in touch</h4>
					<p>Crechterwoord K12 </p>
					<p>085-132567</p>
					<p>info@payme.net</p>
				</div>
				<div className="footer-links-div">
					<h4>Social Links</h4>
					<div className="social-icon">
						<span>
							<RiSlackFill />
						</span>
						<span>
							<RiFacebookFill />
						</span>
						<span>
							<RiInstagramFill />
						</span>
						<span>
							<RiTwitterFill />
						</span>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<p>All rights reserved to Sagor Roy &copy;2021</p>
			</div>
		</div>
	);
};

export default Footer;
