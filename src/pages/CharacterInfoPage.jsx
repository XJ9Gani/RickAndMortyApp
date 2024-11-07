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
} from "../styles/CharDetailStyle";
import axios from "axios";

export default function CharacterInfoPage() {
  const { id } = useParams();
  const { characterDetail, fetchCharacterDetail, loading, error } = useStore();
  const [location, setLocation] = useState(null);
  useEffect(() => {
    fetchCharacterDetail(id);
  }, [id, fetchCharacterDetail]);

  // useEffect(() => {
  //   async function fetchLocation() {
  //     const locationUrls = characterDetail.origin.url;

  //     const locationResponses = await Promise.all(
  //       locationUrls.map((url) => axios.get(url))
  //     );
  //     const locationData = locationResponses.data;
  //     console.log(locationData);
  //   }
  //   fetchLocation();
  // }, []);

  if (loading) return <>Loading...</>;
  if (error) return <>Error: {error}</>;
  if (!characterDetail) return <>Character not found</>;

  return (
    <>
      <BlurredPick
        src={characterDetail.image}
        alt={characterDetail.name}
      ></BlurredPick>
      <CharacterBody>
        <CharacterImg src={characterDetail.image} />
        <CharacterName>{characterDetail.name}</CharacterName>
        <CharacterStatus variant={characterDetail.status}>
          {characterDetail.status}
        </CharacterStatus>
        <CharacterDecription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo minima
          debitis praesentium obcaecati, cupiditate magni placeat ipsum eos
          fugiat tempora animi cumque molestias quaerat voluptatibus repudiandae
          incidunt. Obcaecati, mollitia similique.
        </CharacterDecription>
        <CharacterInfo>
          <CharacterInfoText>
            <CharacterInfoSubText>Gender</CharacterInfoSubText>
            {characterDetail.gender}
          </CharacterInfoText>
          <CharacterInfoText>
            <CharacterInfoSubText>Matherland</CharacterInfoSubText>
            {characterDetail.origin.name}
            {/* <NavLink>{location.name}</NavLink> */}
          </CharacterInfoText>
          {/* <CharacterInfoText>
            <CharacterInfoSubText>Location</CharacterInfoSubText>
            {characterDetail.location.name}
          </CharacterInfoText> */}
          <CharacterInfoText>
            <CharacterInfoSubText>Race</CharacterInfoSubText>
            {characterDetail.species}
          </CharacterInfoText>
        </CharacterInfo>
      </CharacterBody>
    </>
  );
}
