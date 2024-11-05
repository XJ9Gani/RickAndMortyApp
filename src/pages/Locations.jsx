import { useEffect } from "react";
import useStore from "../store";

export default function Locations() {
  const { data, loading, error, fetchData } = useStore();
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/location");
  }, [fetchData]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
}
