import ImageItem from "./ImageItem";

interface Props {
    imgNames: string[];
}

function ImageItemWrapper({ imgNames }: Props) {
    return (
        <div className="image-item-wrapper-wrapper">
            {imgNames.map((name) => {
                return (
                    <div>
                        <ImageItem imgName={name} />
                        <p></p>
                    </div>
                )
            })}
        </div>
    );
}

export default ImageItemWrapper;
