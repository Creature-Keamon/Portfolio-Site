import CustomHeader from "./CustomHeader";
import TopBar from "./TopBar";
import FilterWrapper from "./FilterWrapper";

interface Props {
  children: React.ReactNode;
  title: string;
  filter: boolean;
}

/*creates a page within some formatting rules and populates it with 
it's given props*/
function Page({ children, title, filter }: Props) {
  const arr = ["Programming", "3D Art", "Game Design", "Video Editing"];
  const testTags = ["Hello"];
  return (
    <div className="Bg">
      <TopBar />
      <CustomHeader text={title} />
      {filter === true && <FilterWrapper filters={arr}></FilterWrapper>}
      {children}
    </div>
  );
}

export default Page;
