import { useEffect, useState, useCallback } from "react";
import useStore from "../store";
import NoFoundPick from "../Assets/NoFoundPick.png";
import { SearchForm } from "../components";
import { NavLink } from "react-router-dom";
import { SimpleContainer, EmptyDataContainer } from "../styles/Container";
import { SimpleText } from "../styles/Card";
import { NotFoundImg } from "../styles/NotFound";
import { CharacterPageIconStyle } from "../styles/Icon";
import { CharPageIcon } from "../Icon/CharactePageIcons";
import { useDebouncer } from "../use-hook";
import { Button, ButtonContainer } from "../styles/Button";
import { ArrowIcon } from "../Icon/ArrowIcon";
import {
  CharacterCardContainer,
  CharacterImg,
  CharacterBody,
  CharacterListContainer,
  CardText,
  CardStatus,
  CardTitle,
} from "../styles/CharactersStyle/CharacterStyle";
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
    theme,
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

  if (loading)
    return (
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "100px" }}>
        Loading...
      </h1>
    );
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <SearchForm title="Search Character" />
      <SimpleText state={theme} width="12px">
        Characters count: {filterData.length}
      </SimpleText>

      {filterData.length !== 0 ? (
        <>
          <SimpleContainer width="70%" height="50px">
            <CharacterPageIconStyle onClick={toggleOrder}>
              {order ? CharPageIcon.orderIcon1 : CharPageIcon.orderIcon2}
            </CharacterPageIconStyle>
          </SimpleContainer>
          <CharacterListContainer order={order ? "byOne" : "default"}>
            {filterData.map((el) => (
              <CharacterCardContainer
                key={el.id}
                order={order ? "byOne" : "default"}
              >
                <NavLink to={`/characters/${el.id}`}>
                  <CharacterImg
                    src={el.image}
                    alt={el.name}
                    order={order ? "byOne" : "default"}
                  />
                </NavLink>
                <CharacterBody order={order ? "byOne" : "default"}>
                  <CardStatus variant={el.status}>{el.status}</CardStatus>
                  <CardTitle state={theme}>{el.name}</CardTitle>
                  <CardText size="12px">
                    {el.species} , {el.gender}
                  </CardText>
                </CharacterBody>
              </CharacterCardContainer>
            ))}
          </CharacterListContainer>
          <ButtonContainer>
            <Button
              left="20%"
              onClick={getPrevPage}
              disabled={page <= 1}
              state={theme}
            >
              {ArrowIcon.prevPageIcon}
            </Button>
            <Button
              right="20%"
              onClick={getNextPage}
              disabled={page >= 42}
              state={theme}
            >
              {ArrowIcon.nextPageIcon}
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
