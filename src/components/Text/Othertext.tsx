interface Props {
  font?: string;
  children: React.ReactNode;
}

function OtherText({ children, font }: Props) {
  return (
    <div className={"other-text-wrapper"}>
      <p className={"text other-text"} style={{ fontFamily: font }}>
        {children}
      </p>
    </div>
  );
}

export default OtherText;
