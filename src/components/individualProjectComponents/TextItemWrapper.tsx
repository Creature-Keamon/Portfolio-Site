import TextItem from "./TextItem";

interface Props {
    data: {
        font: string;
        textColor: string;
        texts: string[];
    };
}

function TextItemWrapper({ data }: Props) {
    return (
        <div className="text-item-wrapper-wrapper">
            {data.texts.map((text, i) => {
                const newData = { font: data.font, textColor: data.textColor, text };
                return (
                    <div key={"text-item-wrapper-" + i}>
                        <TextItem data={newData} />
                        <p></p>
                    </div>
                )
            })}
        </div>
    );
}

export default TextItemWrapper;
