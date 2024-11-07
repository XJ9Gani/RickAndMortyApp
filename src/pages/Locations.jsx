import { useEffect, useCallback, useState } from "react";
import useStore from "../store";
import { SearchForm } from "../components";
import { ListContainer } from "../styles/Container";
import { SimpleText } from "../styles/Card";
import { EmptyDataContainer } from "../styles/Container";
import { NotFoundImg } from "../styles/NotFound";
import NoFoundLocation from "../Assets/NoFoundLocation.png";
import { Button, ButtonContainer } from "../styles/Button";
import { NavLink } from "react-router-dom";
import {
  CardBody,
  CardContainer,
  CardHeader,
  CardTitle,
  CardText,
} from "../styles/LocationsStyle/LocationCard";
import { useDebouncer } from "../use-hook";
import location1 from "../Assets/Location1.png";
import location2 from "../Assets/Location2.png";
import location3 from "../Assets/Location3.jpg";
export default function Locations() {
  const { loading, error, fetchData, filterData, searchQuery, setFilterData } =
    useStore();
  const [page, setPage] = useState(1);

  const getPrevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);
  const getNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);
  const debouncedSearchQuery = useDebouncer(searchQuery, 500);
  useEffect(() => {
    fetchData(`https://rickandmortyapi.com/api/location/?page=${page}`);
  }, [fetchData, page]);
  useEffect(() => {
    setFilterData(debouncedSearchQuery);
  }, [debouncedSearchQuery, setFilterData]);

  const imagePlacer = (id) => {
    if (id % 2 === 0) {
      return location1;
    } else if (id % 3 === 0) {
      return location2;
    } else {
      return location3;
    }
  };

  if (loading) return <div>...Loading</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <SearchForm title="Search location" />
      <SimpleText width="12px">Locations count: {filterData.length}</SimpleText>
      {filterData.length !== 0 ? (
        <>
          <ListContainer order="byOne">
            {filterData.map((el) => (
              <CardContainer key={el.id}>
                <NavLink to={`/location/${el.id}`}>
                  <CardHeader src={imagePlacer(el.id)}></CardHeader>
                </NavLink>
                <CardBody>
                  <CardTitle>{el.name}</CardTitle>
                  <CardText>
                    {el.type} | {el.dimension}
                  </CardText>
                </CardBody>
              </CardContainer>
            ))}
          </ListContainer>
          <ButtonContainer>
            <Button left="20%" onClick={getPrevPage} disabled={page <= 1}>
              ↩
            </Button>
            <Button right="20%" onClick={getNextPage} disabled={page >= 7}>
              ↪
            </Button>
          </ButtonContainer>
        </>
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
