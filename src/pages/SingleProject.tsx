import Page from "../components/Page";
import TextItemWrapper from "../components/Text/TextItem";
import ImageItemWrapper from "../components/Image/ImageItemWrapper";
import Button from "../components/Navigation/NavigatableButton";
import LinkButton from "../components/Navigation/ProjectLinkButton";

interface Props {
	projectInfo: {
		Name: string,
		Year: string,
		ImgName: string,
		Tags: string[],
		PageURL: string,
		data: {
			buttonText: string[],
			buttonImages: string[],
			buttonLinks: string[],
			title: string,
			subtitle: string,
			summary: string,
			font: string,
			textColor: string,
			backgroundColor: string,
			buttonColor: string,
			buttonTags: string[],
			images: string[],
			text: string[],
		}
	},
}
const openLink = (url: string) => {
	window.open(url, "_blank", "noopener,noreferrer");
};

function SingleProject({ projectInfo }: Props) {
	const text: string[] = [];
	const imgNames: string[] = [];
	for (let i = 0; i < projectInfo.data.text.length; i++) {
		text.push(projectInfo.data.text[i]);
		imgNames.push(projectInfo.data.images[i]);
	}
	const newData = { font: projectInfo.data.font, textColor: projectInfo.data.textColor, texts: text };

	let tags: string = ""
	for (let i = 0; i < projectInfo.data.buttonTags.length; i++) {
		tags += projectInfo.data.buttonTags[i];
		console.log(projectInfo.data.buttonTags[i]);
		tags += " ";

	}
	return (
		<Page
			title={projectInfo.data.title}
			subtitle={projectInfo.data.subtitle}
			font={projectInfo.data.font}
			textColor={projectInfo.data.textColor}
			backgroundColor={projectInfo.data.backgroundColor}
			buttonLinks={projectInfo.data.buttonLinks}
			buttonText={projectInfo.data.buttonText}
			buttonImages={projectInfo.data.buttonImages}
			pageName={projectInfo.data.title}>
			<div className="single-project-content-grid">
				<div className="text-wrapper">
					<div className="content-grid-item">
						<h3 className=" text header-text"
							style={{ fontFamily: projectInfo.data.font, color: projectInfo.data.textColor, lineHeight: 0.9 }}>
							{projectInfo.data.summary}
						</h3>
						<h5 style={{ fontFamily: projectInfo.data.font, color: projectInfo.data.textColor, marginTop: "10px" }}>Relevant Tags</h5>
						<div style={{ display: "flex" }}>
							{projectInfo.Tags.map((tag) => {
								return <button
									type="button"
									className={"filter-button " + tags}
									style={{ fontFamily: projectInfo.data.font, color: projectInfo.data.textColor, backgroundColor: projectInfo.data.buttonColor }}
									disabled>
									{tag}

								</button>
							})}
						</div>
						<hr className="rounded" style={{ color: projectInfo.data.textColor, borderTop: "2px solid", }} />

					</div>
					<TextItemWrapper data={newData} />
				</div>
				<div className="image-wrapper">
					<ImageItemWrapper imgNames={imgNames} />
				</div>
			</div>

		</Page>
	);
}

export default SingleProject;
