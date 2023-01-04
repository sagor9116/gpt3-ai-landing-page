import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import { RiMailOpenFill } from "react-icons/ri";
import "./header.css";

const Header = () => {
	return (
		<div>
			<div className="header section-padding" id="home">
				<div className="header-image">
					<img src={ai} alt="" />
				</div>
				<div className="header-content">
					<h1 className="gradient-text">
						Build next-gen apps with GPT-3 OpenAI
					</h1>
					<p>
						Over 300 applications are delivering GPT-3–powered
						search, conversation, text completion, and other
						advanced AI features through OpenAI API.
					</p>
					<div className="header-content-input">
						<input type="email" placeholder="Your Email Address" />
						<button type="button">
							<RiMailOpenFill />
						</button>
					</div>
					<div className="header-content-people">
						<img src={people} alt="chat people" />
						<p>
							1,600 people requested access a visit in last 24
							hours.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
