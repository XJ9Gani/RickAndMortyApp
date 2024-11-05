import { useEffect } from "react";
import useStore from "../store";
import { ListContainer } from "../styles/Container";
import { CardContainer, CardImg, CardTitle, CardText } from "../styles/Card";
export default function Characters() {
  const { data, loading, error, fetchData } = useStore();

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <ListContainer>
        {data.map((el) => (
          <CardContainer key={el.id}>
            <CardImg src={el.image} alt={el.name} />
            <CardText variant={el.status}>{el.status}</CardText>
            <CardTitle>{el.name}</CardTitle>
          </CardContainer>
        ))}
      </ListContainer>
    </>
  );
}
