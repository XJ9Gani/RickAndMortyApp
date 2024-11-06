import { useEffect } from "react";
import useStore from "../store";
import { SearchForm } from "../components";
import { ListContainer } from "../styles/Container";
import { SimpleText } from "../styles/Card";
import { EmptyDataContainer } from "../styles/Container";
import { NotFoundImg } from "../styles/NotFound";
import NoFoundLocation from "../Assets/NoFoundLocation.png";
import {
  CardBody,
  CardContainer,
  CardHeader,
  CardTitle,
  CardText,
} from "../styles/LocationsStyle/LocationCard";
import { useDebouncer } from "../use-hook";

export default function Locations() {
  const { loading, error, fetchData, filterData, searchQuery, setFilterData } =
    useStore();

  const debouncedSearchQuery = useDebouncer(searchQuery, 500);
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/location");
  }, [fetchData]);
  useEffect(() => {
    setFilterData(debouncedSearchQuery);
  }, [debouncedSearchQuery, setFilterData]);

  const imagePlacer = (id) => {
    if (id % 2 === 0) {
      return "https://m.media-amazon.com/images/M/MV5BMjdkOThmOTItNzc4Yy00Y2VkLTk3ZjktMzFiOWEyNjk2OGFiXkEyXkFqcGdeQXVyNjc0NTIwNTU@._V1_.jpg";
    } else if (id % 3 === 0) {
      return "https://i.ytimg.com/vi/wyGrmK7LLW0/maxresdefault.jpg";
    } else {
      return "https://i.ytimg.com/vi/whk40SeznP4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgZyg2MA8=&rs=AOn4CLD-1Jz8tq0J9xx0q3ywjLlG1PI84A";
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <SearchForm title="Search location" />
      <SimpleText width="12px">всего локации: 200</SimpleText>
      {filterData.length !== 0 ? (
        <ListContainer order="byOne">
          {filterData.map((el) => (
            <CardContainer key={el.id}>
              <CardHeader src={imagePlacer(el.id)}></CardHeader>
              <CardBody>
                <CardTitle>{el.name}</CardTitle>
                <CardText>
                  {el.type} | {el.dimension}
                </CardText>
              </CardBody>
            </CardContainer>
          ))}
        </ListContainer>
      ) : (
        <EmptyDataContainer>
          <NotFoundImg src={NoFoundLocation} />
          <SimpleText width="200px">
            There is no location with that name
          </SimpleText>
        </EmptyDataContainer>
      )}
    </>
  );
}
