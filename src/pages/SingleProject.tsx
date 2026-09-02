import Page from "../components/Page";
import TextItemWrapper from "../components/Text/TextItem";
import ImageItemWrapper from "../components/Image/ImageItemWrapper";
import TopBar from "../components/Navigation/TopBar";

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
		tags += " ";

	}
	return (
		<Page
			title={projectInfo.data.title}
			subtitle={projectInfo.data.subtitle}
			font={projectInfo.data.font}
			textColor={projectInfo.data.textColor}
			backgroundColor={projectInfo.data.backgroundColor}
			>
		<div className="grid-item">
			<TopBar
			{...(projectInfo.data.buttonLinks != null ? { buttonLinks: projectInfo.data.buttonLinks } : {})}
			buttonImages={projectInfo.data.buttonImages}
			buttonText={projectInfo.data.buttonText}
			pageName={projectInfo.data.title}
			font={projectInfo.data.font} 
			tags={tags}
			buttonColour={projectInfo.data.buttonColor}
			textColour={projectInfo.data.textColor}/>
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
			</div>`
      </div>

		</Page>
	);
}

export default SingleProject;
