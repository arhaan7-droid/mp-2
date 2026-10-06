import RickAndMorty from "./Components/RickAndMorty.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type{Character} from "./interfaces/Character";

const ParentDiv = styled.div`
    box-sizing: border-box;
    width: 94vw;
    margin: 2% auto;
    padding: 1%;
    background-color: #0d1b1e;
    border: 5px solid #97ce4c;
    border-radius: 20px; /* rounds off the corners of the big outer box */
`;

export default function App() {

  // useState Hook to store Data.
  const [data, setData] = useState<Character[]>([]);

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://rickandmortyapi.com/api/character");
      const {results}: { results: Character[] } = await rawData.json();
      setData(results);
    }

    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
      <ParentDiv>
        <RickAndMorty data={data}/>
      </ParentDiv>
  );
}