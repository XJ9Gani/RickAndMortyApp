import { useEffect, useState } from "react";
import useStore from "../store";
import { ListContainer, SimpleContainer } from "../styles/Container";
import { CardContainer, CardImg, CardTitle, CardText } from "../styles/Card";
import { CharacterPageIconStyle } from "../styles/Icon";
import { CharPageIcon } from "../Icon/CharactePageIcons";

export default function Characters() {
  const [order, setOrder] = useState(false);
  const { data, loading, error, fetchData } = useStore();

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, [fetchData]);

  const toggleOrder = () => {
    setOrder((prev) => !prev);
    console.log(order);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <SimpleContainer width="70%" height="50px">
        <CharacterPageIconStyle onClick={toggleOrder}>
          {CharPageIcon.orderIcon}
        </CharacterPageIconStyle>
      </SimpleContainer>

      <ListContainer order={order ? "byOne" : "default"}>
        {data.map((el) => (
          <CardContainer key={el.id} order={order ? "byOne" : "default"}>
            <CardImg
              src={el.image}
              alt={el.name}
              order={order ? "byOne" : "default"}
            />
            <CardText variant={el.status}>{el.status}</CardText>
            <CardTitle>{el.name}</CardTitle>
          </CardContainer>
        ))}
      </ListContainer>
    </>
  );
}
