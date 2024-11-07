import { useEffect, useState, useCallback } from "react";
import useStore from "../store";
import NoFoundPick from "../Assets/NoFoundPick.png";
import { SearchForm } from "../components";
import { NavLink } from "react-router-dom";
import {
  ListContainer,
  SimpleContainer,
  EmptyDataContainer,
} from "../styles/Container";
import {
  CardContainer,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  SimpleText,
} from "../styles/Card";
import { NotFoundImg } from "../styles/NotFound";
import { CharacterPageIconStyle } from "../styles/Icon";
import { CharPageIcon } from "../Icon/CharactePageIcons";
import { useDebouncer } from "../use-hook";
import { Button, ButtonContainer } from "../styles/Button";
export default function Characters() {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(false);
  const {
    data,
    loading,
    error,
    fetchData,
    filterData,
    searchQuery,
    setFilterData,
  } = useStore();

  const debouncedSearchQuery = useDebouncer(searchQuery, 500);
  useEffect(() => {
    fetchData(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }, [fetchData, page]);
  useEffect(() => {
    setFilterData(debouncedSearchQuery);
  }, [debouncedSearchQuery, setFilterData]);

  const getPrevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);
  const getNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const toggleOrder = () => {
    setOrder((prev) => !prev);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <SearchForm title="Найти персонажа" />
      <SimpleText width="12px">
        Characters count: {filterData.length}
      </SimpleText>

      {filterData.length !== 0 ? (
        <>
          <SimpleContainer width="70%" height="50px">
            <CharacterPageIconStyle onClick={toggleOrder}>
              {order ? CharPageIcon.orderIcon1 : CharPageIcon.orderIcon2}
            </CharacterPageIconStyle>
          </SimpleContainer>
          <ListContainer order={order ? "byOne" : "default"}>
            {filterData.map((el) => (
              <CardContainer key={el.id} order={order ? "byOne" : "default"}>
                <NavLink to={`/characters/${el.id}`}>
                  <CardImg
                    src={el.image}
                    alt={el.name}
                    order={order ? "byOne" : "default"}
                  />
                </NavLink>
                <CardBody order={order ? "byOne" : "default"}>
                  <CardText variant={el.status}>{el.status}</CardText>
                  <CardTitle>{el.name}</CardTitle>
                  <SimpleText size="12px">
                    {el.species} , {el.gender}
                  </SimpleText>
                </CardBody>
              </CardContainer>
            ))}
          </ListContainer>
          <ButtonContainer>
            <Button left="20%" onClick={getPrevPage} disabled={page <= 1}>
              {`<`}
            </Button>
            <Button right="20%" onClick={getNextPage} disabled={page >= 42}>
              {`>`}
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <EmptyDataContainer>
          <NotFoundImg src={NoFoundPick} />
          <SimpleText width="200px">
            There is no character with that name
          </SimpleText>
        </EmptyDataContainer>
      )}
    </>
  );
}
