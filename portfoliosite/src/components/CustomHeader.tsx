interface Props {
  text: string;
}

const CustomHeader = ({ text }: Props) => {
  return <h1 className="CustomHeader">{text}</h1>;
};

export default CustomHeader;
