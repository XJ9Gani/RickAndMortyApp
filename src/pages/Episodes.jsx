import useStore from "../store";
import { SearchForm } from "../components";
import { useEffect, useState, useCallback } from "react";
import { Button, ButtonContainer } from "../styles/Button";
import Ep1 from "../Assets/Ep1.png";
import Ep2 from "../Assets/Ep2.png";
import Ep3 from "../Assets/Ep3.png";
import Ep4 from "../Assets/Ep4.png";
import Ep5 from "../Assets/Ep5.png";
import Ep6 from "../Assets/Ep6.png";
import NoFoundEp from "../Assets/NoFoundEp.png";
import { NotFoundImg } from "../styles/NotFound";
import { EmptyDataContainer } from "../styles/Container";
import { SimpleText } from "../styles/Card";
import {
  EpisodeContainer,
  EpisodesCardContainer,
  EpisodesImg,
  EpisodesBody,
  EpisodesCount,
  EpisodesName,
} from "../styles/EpisodesStyle/EpisodeStyle";
import { useDebouncer } from "../use-hook";
export default function Episodes() {
  const [page, setPage] = useState(1);

  const getPrevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);
  const getNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);
  const { filterData, error, loading, fetchData, searchQuery, setFilterData } =
    useStore();
  const debouncedSearchQuery = useDebouncer(searchQuery, 500);
  useEffect(() => {
    fetchData(`https://rickandmortyapi.com/api/episode/?page=${page}`);
  }, [fetchData, page]);

  const imagePlacer = (id) => {
    if (id % 2 === 0) {
      return Ep1;
    } else if (id % 3 === 0) {
      return Ep2;
    } else if (id % 4 === 0) {
      return Ep3;
    } else if (id % 5 === 0) {
      return Ep4;
    } else if (id % 6 === 0) {
      return Ep5;
    } else {
      return Ep6;
    }
  };
  useEffect(() => {
    setFilterData(debouncedSearchQuery);
  }, [debouncedSearchQuery, setFilterData]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <SearchForm title="Search EP" />
      <SimpleText width="12px">Episode count: {filterData.length}</SimpleText>
      {filterData.length !== 0 ? (
        <>
          <EpisodeContainer>
            {filterData.map((el) => (
              <EpisodesCardContainer key={el.id}>
                <EpisodesImg src={imagePlacer(el.id)} alt={el.name} />
                <EpisodesBody>
                  <EpisodesCount>Episode:{el.id}</EpisodesCount>
                  <EpisodesName>{el.name}</EpisodesName>
                </EpisodesBody>
              </EpisodesCardContainer>
            ))}
          </EpisodeContainer>
          <ButtonContainer>
            <Button left="20%" onClick={getPrevPage} disabled={page <= 1}>
              {`<`}
            </Button>
            <Button right="20%" onClick={getNextPage} disabled={page >= 3}>
              {`>`}
            </Button>
          </ButtonContainer>{" "}
        </>
      ) : (
        <>
          {" "}
          <EmptyDataContainer>
            <NotFoundImg src={NoFoundEp} />
            <SimpleText width="200px">
              There is no episode with that name
            </SimpleText>
          </EmptyDataContainer>
        </>
      )}
    </>
  );
}
