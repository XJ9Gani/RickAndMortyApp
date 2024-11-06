import { useEffect, useState } from "react";
import useStore from "../store";
import NoFoundPick from "../Assets/NoFoundPick.png";
import { SearchForm } from "../components";
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

export default function Characters() {
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
    fetchData("https://rickandmortyapi.com/api/character");
  }, [fetchData]);
  useEffect(() => {
    setFilterData(debouncedSearchQuery);
  }, [debouncedSearchQuery, setFilterData]);

  const toggleOrder = () => {
    setOrder((prev) => !prev);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <SearchForm title="Найти персонажа" />
      <SimpleText width="12px">всего персонажей: 200</SimpleText>

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
                <CardImg
                  src={el.image}
                  alt={el.name}
                  order={order ? "byOne" : "default"}
                />
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
