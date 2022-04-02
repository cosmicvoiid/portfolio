import React from "react";
import "./Projects.css";
import agoraImg from "../images/agora-screenshot.png";
import agoraMP4 from "../videos/agora-long3.mp4";
import watchTowerImg from "../images/watch-tower.png";

function Projects() {
	return (
		<div className="projects-page">
			<h1 className="projects-header">
				Projects<span className="projects-header-border-bottom"></span>
			</h1>
			<div className="wave-container2">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			<div className="projects-container">
				<div className="project">
					<video
						autoPlay={true}
						muted={true}
						loop={true}
						className="project-video"
						src={agoraMP4}
						type="video/mp4"
						onMouseOut={(e) => {
							e.target.currentTime = 0;
							e.target.pause();
						}}
						onMouseOver={(e) => e.target.play()}
					/>
					<div className="project-info-container">
						<h2 className="project-header">Agora</h2>
						<h2 className="project-description-header">Social Media App</h2>
						<p className="project-description">
							A full stack social media app created using React, Node.js,
							Express.js, and MongoDB.
						</p>
						<p className="project-description-desktop">
							Hover over the image for a quick demo!
						</p>
					</div>
				</div>

				<div className="project project2">
					<div className="project-info-container project2-info-container">
						<h2 className="project-header">The Watch Tower</h2>
						<h2 className="project-description-header">E-commerce website</h2>
						<p className="project-description">
							A fully responsive luxury watch e-commerce website complete with a
							functioning shopping cart.
						</p>
					</div>

					<img
						className="project2-image"
						src={watchTowerImg}
						alt="Watch Tower website"
					/>
				</div>
			</div>
			{/* <div className="spacer layer1"></div> */}
		</div>
	);
}

export default Projects;