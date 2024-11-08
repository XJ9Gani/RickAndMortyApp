import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useStore from "../store";
import {
  BlurredPick,
  CharacterBody,
  CharacterImg,
  CharacterName,
  CharacterStatus,
  CharacterDecription,
  CharacterInfo,
  CharacterInfoText,
  CharacterInfoSubText,
  ActedEpisodContainer,
  ActedEpisodCardContainer,
  ActedEpisodImg,
  ActedEpisodName,
  ActedEpisodBody,
} from "../styles/CharactersStyle/CharDetailStyle";
import axios from "axios";
export default function CharacterInfoPage() {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const { characterDetail, fetchCharacterDetail, loading, error, theme } =
    useStore();
  useEffect(() => {
    fetchCharacterDetail(id);
  }, [id, fetchCharacterDetail]);

  useEffect(() => {
    const allEpisodes = [];
    async function fetchEpisodes() {
      try {
        const episodePromises = characterDetail.episode.map((url) =>
          axios.get(url)
        );
        const episodeResponses = await Promise.all(episodePromises);
        const episodeData = episodeResponses.map((response) => response.data);
        allEpisodes.push(...episodeData);
        setEpisodes(allEpisodes);
        console.log(episodes);
      } catch (e) {
        console.log(e);
      }
    }
    fetchEpisodes();
  }, [characterDetail]);

  if (loading) return <>Loading...</>;
  if (error) return <>Error: {error}</>;
  if (!characterDetail) return <>Character not found</>;

  return (
    <>
      <BlurredPick
        src={characterDetail.image}
        alt={characterDetail.name}
      ></BlurredPick>
      <CharacterBody state={theme}>
        <CharacterImg state={theme} src={characterDetail.image} />
        <CharacterName state={theme}>{characterDetail.name}</CharacterName>
        <CharacterStatus variant={characterDetail.status}>
          {characterDetail.status}
        </CharacterStatus>
        <CharacterDecription state={theme}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo minima
          debitis praesentium obcaecati, cupiditate magni placeat ipsum eos
          fugiat tempora animi cumque molestias quaerat voluptatibus repudiandae
          incidunt. Obcaecati, mollitia similique.
        </CharacterDecription>
        <CharacterInfo>
          <CharacterInfoText state={theme}>
            <CharacterInfoSubText>Gender</CharacterInfoSubText>
            {characterDetail.gender}
          </CharacterInfoText>
          <CharacterInfoText state={theme}>
            <CharacterInfoSubText>Matherland</CharacterInfoSubText>
            {characterDetail.origin.name}
          </CharacterInfoText>

          <CharacterInfoText state={theme}>
            <CharacterInfoSubText>Race</CharacterInfoSubText>
            {characterDetail.species}
          </CharacterInfoText>
        </CharacterInfo>
        <ActedEpisodContainer>
          {episodes.map((el) => (
            <ActedEpisodCardContainer>
              <ActedEpisodImg src={characterDetail.image} />
              <ActedEpisodBody>
                <ActedEpisodName state={theme}>{el.name}</ActedEpisodName>
              </ActedEpisodBody>
            </ActedEpisodCardContainer>
          ))}
        </ActedEpisodContainer>
      </CharacterBody>
    </>
  );
}
