import React from "react";
import { Feature } from "../../components";
import { featuresData } from "./data";
import "./features.css";

const Features = () => {
	return (
		<div className="features" id="features">
			<div className="features-heading">
				<h1 className="gradient-text">
					The Future is Now and You Just Need to Realize It. Step into
					Future Today. & Make it Happen.
				</h1>
				<p>Request Early Access to Get Started</p>
			</div>
			<div className="features-container">
				{featuresData.map(({ index, title, text }) => {
					return (
						<>
							<Feature key={index} title={title} text={text} />
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Features;
