interface Props {
    imgName: string;

}

function ImageItem({ imgName }: Props) {
    return (
        <div className="image-item-wrapper">
            <div className="content-image-wrapper">
                <img className={"content-image main-image"} src={imgName} />
            </div>
        </div>
    );
}

export default ImageItem;
