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
                        <h2 className="text-item" style={{ fontFamily: newData.font, color: newData.textColor }}>{newData.text}</h2>
                        <p></p>
                    </div>
                )
            })}
        </div>
    );
}

export default TextItemWrapper;
