import Page from "../components/Page";
import TextItemWrapper from "../components/Text/TextItem";
import ImageItemWrapper from "../components/Image/ImageItemWrapper";

interface Props {
	data: {
		buttonText: string[];
		buttonImages: string[];
		buttonLinks: string[];
		title: string;
		subtitle: string;
		font: string;
		textColor: string;
		backgroundColor: string;
		pageData: { imgName: string; pageData: string }[];
	};
}

function SingleProject({ data }: Props) {
	const text: string[] = [];
	const imgNames: string[] = [];
	for (let i = 0; i < data.pageData.length; i++) {
		text.push(data.pageData[i].pageData);
		imgNames.push(data.pageData[i].imgName);
	}
	const newData = { font: data.font, textColor: data.textColor, texts: text };
	return (
		<Page
			title={data.title}
			subtitle={data.subtitle}
			font={data.font}
			textColor={data.textColor}
			backgroundColor={data.backgroundColor}
			buttonLinks={data.buttonLinks}
			buttonText={data.buttonText}
			buttonImages={data.buttonImages}
			pageName={data.title}
		>

			<div className="single-project-content-grid">
				<div className="text-wrapper">
					<div className="content-grid-item">
						<h3 className=" text header-text"
							style={{ fontFamily: data.font, color: data.textColor, lineHeight: 0.9 }}>
							{"Designed, managed, and created art for a 3D game about dismantling broken down space ships."}
						</h3>
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
