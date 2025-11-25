import CustomHeader from "./CustomHeader";
import TopBar from "./TopBar";
import FilterWrapper from "./FilterWrapper";

interface Props {
  children: React.ReactNode;
  title: string;
  filter: boolean;
  subtitle: string;
}

/*creates a page within some formatting rules and populates it with 
it's given props*/
function Page({ children, title, filter = false, subtitle = "" }: Props) {
  const arr = ["Programming", "3D Art", "Game Design", "Video Editing"];
  return (
    <div className="Bg">
      <div className="grid-item">
        {filter === true ? (
          <FilterWrapper filters={arr}></FilterWrapper>
        ) : (
          <div className="filter-wrapper"></div>
        )}
        {children}
      </div>
      <div className="grid-item">
        <div className="header">
          <TopBar />
          <CustomHeader text={title} subheader={subtitle} />
        </div>
      </div>
    </div>
  );
}

export default Page;
