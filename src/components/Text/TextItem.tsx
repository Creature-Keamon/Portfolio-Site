interface Props {
    data: {
        font: string;
        textColor: string;
        text: string;
    };
}

function TextItem({ data }: Props) {
    return (
        <div className="text-item-wrapper">
            <h1 className="text-item" style={{ fontFamily: data.font, color: data.textColor, fontSize: "30px"}}>{data.text}</h1>
        </div>
    );
}

export default TextItem;
