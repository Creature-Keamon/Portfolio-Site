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
            <p className="text-item" style={{ fontFamily: data.font, color: data.textColor }}>{data.text}</p>
        </div>
    );
}

export default TextItem;
