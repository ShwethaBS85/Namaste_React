import ResCard from "./RestoCard";
import { restaurantData } from "../utils/mockData";

const Search = () => {
  return <div>Search</div>;
};

const Body = () => {
  return (
    <div>
      <div className="search">
        <Search />
      </div>
      <div className="resto-container">
        {restaurantData.map((data) => {
          return (
            <ResCard
              resData={data}
              key={data.card.card.info.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
