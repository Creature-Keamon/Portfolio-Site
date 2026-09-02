import Decommission from "../assets/images/Decommission.png";
import Decommission1 from "../assets/images/Decommission1.png";
import Decommission2 from "../assets/images/Decommission2.png";
import Decommission3 from "../assets/images/Decommission3.png";
import Ammit from "../assets/images/Ammit.png";
import Ammit2 from "../assets/images/Ammit2.png";
import Ammit3 from "../assets/images/Ammit3.jpeg";
import Reminisce from "../assets/images/Reminisce.png";
import Reminisce2 from "../assets/images/Reminisce2.jpg";
import Reminisce3 from "../assets/images/Reminisce3.jpg";
import Reminisce4 from "../assets/images/Reminisce4.jpg";
import Polaroam from "../assets/images/Polaroam.png";
import Polaroam1 from "../assets/images/Polaroam1.png";


const Projects = [
	{
		Name: "Polaroam",
		Year: "Ongoing",
		ImgName: Polaroam,
		Tags: ["Full Stack Development", "CI/CD", "Scrum"],
		PageURL: "Polaroam",
		data: {
			buttonText: [],
			buttonImages: [],
			buttonLinks: [],
			title: "POLAROAM",
			subtitle: "Ongoing",
			summary: "A travel logging app that allows users to upload photos, group them into trips, with AI generated image tags to allow for plain English searching.",
			font: "Syne",
			textColor: "#1f1f1f",
			backgroundColor: "#f8ca40",
			buttonColor: "#22cacfff",
			buttonTags: ["polaroam-button"],
			images: [Polaroam, Polaroam1],
			text: ["Polaroam was developed as group project for a final year Software Engineering class. Here, we were placed in a year long simulation of a real scrum development environment and were expected to create a production ready piece of software while adhering to scrum principles, negotiating stories and acceptance criteria with our Product Owner, creating automatic pipelines, running automatic and manual tests, and most importantly, working as an efficient 6 developer team in a flat organisational heirarchy.", 
			"Originally Polaroam was called \'Outstanding\' and was a task management app with two-factor authentication for login and kanban style task management. Later we pivoted to instead create a Trip logging app that allows users to store information about their travel, dump photos, and create \'Scrapbooks\' to allow users to share curated and beautiful snapshots into their holidays."],
		}
	},
	{
		Name: "Decommission",
		Year: "2025",
		ImgName: Decommission,
		Tags: ["Game Design", "3D Art"],
		PageURL: "Decommission",
		data: {
			buttonText: ["Itch.io"],
			buttonImages: ["itchiologo"],
			buttonLinks: ["https://creaturekeamon.itch.io/decommission"],
			title: "DECOMMISSION",
			subtitle: "2025",
			summary: "Designed, managed, and created art for a 3D game about dismantling broken down space ships.",
			font: "Genos",
			textColor: "#ffeac4ce",
			backgroundColor: "#6b625cff",
			buttonColor: "#3f3a36ff",
			buttonTags: [],
			images: [Decommission, Decommission1, Decommission2, Decommission3],
			text: [
				"Decommission is a small, proof of concept game where you, the player,is a scrapper whose job it is to salvage valuable parts from old and progressively larger and larger spacecraft. The larger the space ship, the more valuables are inside, but require different tools to access. For this project, I was a Game Designer, Project Manager, Team Leader,and 3D modeller.",
				"From the ground up we wanted it to be a cozy, relaxing experience, so this needed to be reflected in both the gameplay mechanics and the visual aesthetics. For design, we chose a warm colour tone with a small palette, and made all important elements starkly contrast against the background without breaking style.",
				"The player has access to multiple tools (and would be able to unlockmore if this was a full game), each with their own use cases. However, we knew that if we designed our tools to be more realistic and representative of themselves in real life, it would introduce extra complexity, tedious-ness and the potential for some frustration.",
				"To ensure that our tools do not contrast against our cozy design aesthetics, we designed the tool interactions to be boiled down to the most basic (while still allowing for some nuance), but not boiled down so much that the game just plays itself. I helped make the game fun, interesting to look at, and have interesting mechanics, while ensuring that the games' core and identity were not at all compromised on. Decommission can be downloaded from Itch.io from the link above.",
			],
		}
	},
	{
		Name: "Ammit the Truth",
		Year: "2024",
		ImgName: Ammit,
		Tags: ["Game Design", "3D Art", "Programming", "Writing"],
		PageURL: "Ammit",
		data: {
			buttonText: ["Itch.io"],
			buttonImages: ["itchiologo"],
			buttonLinks: ["https://mythspire-interactive.itch.io/ammit-the-truth"],
			title: "ammit the truth",
			subtitle: "2024",
			summary: "",
			font: "Cinzel Decorative",
			textColor: "rgba(68, 45, 0, 1)",
			backgroundColor: "rgba(184, 146, 75, 1)",
			buttonColor: "rgba(143, 95, 0, 1)",
			buttonTags: [],
			images: [Ammit, Ammit2, Ammit3],
			text: [
				"Ammit the Truth is a deduction/detective based visual novel style video game, using art styles influenced by games like 'Hades', and gameplay reminiscent of games like 'Papers Please'. It sees the player take the role of Anubis, the guardian of the egyptian afterlife, where he must interrogate each soul to determine if they deserve entrance to the field of reeds or to be devoured by Ammit. For this project, I was the Project Manager. I also wrote the dialogue for most interactions, created some 3D models, and designed some of the game's systems.",
				"Our team had some incredible talent, especially in the art department, and that greatly contributed to(what I believe) is a fantastic set of assets.I did 3D art, programming and game design, but my greatest contributions were with project management, writing of dialogue and planning.Creating this game was not without it's hiccups. I had to spend a lot of time managing some of our teammates(along with the 2D artist ).Due to this, much of the game was finished the day before it was due to be handed in, placing us under a lot of stress.",
				"Despite these hiccups, the resulting game was rather enjoyable to play through, with some beautiful art to look at while doing so. I learnt some valuable lessons about how to manage unmotivated teammates and do project management. I am more experienced now with creating 3D models with optimised topology and in game design philosophy and principles. Ammit the Truth can be downloaded from Itch.io from the link at the top of the page.",
			],
		}
	},
	{
		Name: "To Reminisce",
		Year: "2025",
		ImgName: Reminisce,
		Tags: ["Filmmaking", "Video Editing", "Writing"],
		PageURL: "Reminisce",
		data: {
			buttonText: ["Youtube"],
			buttonImages: ["youtubelogo"],
			buttonLinks: ["https://www.youtube.com/watch?v=lXln7oQxuYs"],
			title: "To Reminisce",
			subtitle: "2025",
			summary: "",
			font: "Song Myung",
			textColor: "#ffffffce",
			backgroundColor: "#c9ab6aff",
			buttonColor: "rgb(34, 202, 207)",
			buttonTags: ["polaroam-button"],
			images: [Reminisce, Reminisce2, Reminisce3, Reminisce4],
			text: [

				"To Reminisce is a short film created for the New Zealand 2025 48 Hour Film Competition, and was my second film that I have create seriously.It follows two friend watching footage on a camcorder that their best friend had filmed over the course of their friendship. For this project, I was the lead Editor.I also wrote most ofthe script, assisted in directing, and provided props.",

				"The editing workstation used over the course of the 48 hour creation period, shared between two other editors and myself. We used Davinci Resolve to edit our film. As lead editor and primary script writer, it was my role to translate the director's creative vision into a coherent, Having edited a lot of my own content, I believe I have translated my knack for pacing and habit for rewatching my edits to check for inconsistencies into the creation of this film.",

				"The film we made the previous year was plagued with problems. This year, we did everything we could to mitigate the issues, by double checking our boom arm was properly connected to the camera and filming early in the day, we were able to complete most of the filming by late afternoon, giving me an opportunity to create a rough cut of our film to verify the quality of the clips and to check whether we needed to film more scenes.",

				"Creating To Reminisce was an excellent lesson in filmmaking, writing, the importance of preparation and risk mitigation. Not to mention teamwork and working to a time limit.To Reminisce can be viewed from the button at the top of the page.",
			],
		}
	},
];

export default Projects;
