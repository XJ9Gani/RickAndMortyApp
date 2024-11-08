import { useEffect, useState, useCallback } from "react";
import useStore from "../store";
import { NavLink, useParams } from "react-router-dom";
import location1 from "../Assets/Location1.png";
import location2 from "../Assets/Location2.png";
import location3 from "../Assets/Location3.jpg";

import {
  BackPick,
  LocationBody,
  LocationImg,
  LocationName,
  LocationDimension,
  LocationDecription,
  ResidentsContainer,
  ResidentsCardContainer,
  ResidentsImg,
  ResidentsName,
  ResidentsTitle,
  ResidentsStatus,
  ResidentsBody,
  ResidentInfo,
} from "../styles/LocationsStyle/LocationDetailStyle";
import axios from "axios";
export default function LocationInfoPage() {
  const [residents, setResidents] = useState([]);
  const { id } = useParams();
  const { locationDetail, fetchLocationDetail, loading, error, theme } =
    useStore();

  const imagePlacer = (id) => {
    if (id % 2 === 0) {
      return location1;
    } else if (id % 3 === 0) {
      return location2;
    } else {
      return location3;
    }
  };
  useEffect(() => {
    fetchLocationDetail(id);
  }, [id, fetchLocationDetail]);

  useEffect(() => {
    const allResidents = [];
    async function fetchResident() {
      try {
        const residentPromises = locationDetail.residents.map((url) =>
          axios.get(url)
        );
        const residentResponses = await Promise.all(residentPromises);
        const residentsData = residentResponses.map(
          (response) => response.data
        );
        allResidents.push(...residentsData);

        setResidents(allResidents);
      } catch (e) {
        console.log(e);
      }
    }
    fetchResident();
  }, [locationDetail]);

  if (loading) return <>Loading...</>;
  if (error) return <>Error: {error}</>;
  if (!locationDetail) return <>Character not found</>;
  return (
    <>
      <BackPick
        src={imagePlacer(locationDetail.id)}
        alt={locationDetail.name}
      ></BackPick>

      <LocationBody state={theme}>
        <LocationImg state={theme} src={imagePlacer(locationDetail.id)} />
        <LocationName state={theme}>{locationDetail.name}</LocationName>
        <LocationDimension>
          {locationDetail.type} | {locationDetail.dimension}
        </LocationDimension>
        <LocationDecription state={theme}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptates, labore, est voluptate unde suscipit fuga, amet sint atque
          similique tempora quia! Delectus officia a dolor, hic sunt
          consequuntur beatae.
        </LocationDecription>
        <ResidentsContainer>
          <ResidentsTitle state={theme}>RESIDENTS</ResidentsTitle>
          {residents.map((el) => (
            <NavLink
              to={`/characters/${el.id}`}
              style={{ textDecoration: "none" }}
              key={el.id}
            >
              <ResidentsCardContainer>
                <ResidentsImg src={el.image}></ResidentsImg>
                <ResidentsBody>
                  <ResidentsStatus variant={el.status}>
                    {el.status}
                  </ResidentsStatus>
                  <ResidentsName state={theme}>{el.name}</ResidentsName>
                  <ResidentInfo size="10px" state={theme}>
                    {el.species} , {el.gender}
                  </ResidentInfo>
                </ResidentsBody>
              </ResidentsCardContainer>
            </NavLink>
          ))}
        </ResidentsContainer>
      </LocationBody>
    </>
  );
}
