import React from "react";
import "./whatGPT3.css";
import { mainData } from "./data.js";
import { Feature } from "../../components";

const WhatGPT3 = () => {
	return (
		<div className="whatgpt3 section-padding" id="what">
			<div className="whatgpt3-feature">
				<Feature
					title="What is GPT-3"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
				/>
			</div>
			<div className="whatgpt3-heading">
				<h1 className="gradient-text">
					The possibilities are beyond your imagination
				</h1>
				<p>Explore the Library</p>
			</div>
			<div className="whatgpt3-container">
				{mainData.map(({ title, text, index }) => {
					return <Feature key={index} title={title} text={text} />;
				})}
			</div>
		</div>
	);
};

export default WhatGPT3;
