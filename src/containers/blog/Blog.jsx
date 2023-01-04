import React from "react";

import { blog1, blog2, blog3, blog4, blog5 } from "./import";
import { Article } from "../../components";
import "./blog.css";

const Blog = () => {
	return (
		<div className="blog section-padding" id="blog">
			<div className="blog-heading">
				<h1 className="gradient-text">
					A lot is happening, <br /> We are blogging about it.
				</h1>
			</div>
			<div className="blog-container">
				<div className="blog-container-groupA">
					<Article
						text="GPT-3 and Open AI is the future. Let us exlore how it is?"
						date="sep 26, 2021"
						imgUrl={blog1}
					/>
				</div>
				<div className="blog-container-groupB">
					<Article
						imgUrl={blog2}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog3}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog4}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog5}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;
