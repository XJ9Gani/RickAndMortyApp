import useStore from "../store";
import { useEffect } from "react";
export default function Episodes() {
  const { data, error, loading, fetchData } = useStore();
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/episode");
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
