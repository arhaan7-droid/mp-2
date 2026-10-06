import styled from 'styled-components';
import type {Character} from "../interfaces/Character.ts"

const AllCharsDiv = styled.div`
    display: flex;
    flex-flow: row wrap; /* cards go left to right, and drop to a new line when the row is full */
    justify-content: space-evenly;
    font-family: "Courier New", "Lucida Console", Monaco, monospace;
    text-align: center;
`;

const SingleCharDiv = styled.div<{status: string}>`
    box-sizing: border-box;
    width: 22%;
    margin: 1%;
    padding: 1%;
    background-color: #16302b;
    border: 4px solid ${(props) => (props.status === "Alive" ? '#97ce4c' : props.status === "Dead" ? '#e4572e' : '#8d99a6')};
    border-radius: 15px; /* slightly rounded corners so the cards don't look so boxy */


    /* the character's name */
    & h1 {
        margin: 0 0 4% 0;
        color: #97ce4c;
        font-size: calc(4px + 1.4vw);
        text-transform: uppercase;
    }

    /* (Not Human), gender and location */
    & h3 {
        margin: 3% 0;
        color: #b8c4c2;
        font-size: calc(1px + 1vw);
        font-style: italic;
    }

    /* round portrait */
    & img {
        display: block;
        width: 80%;
        margin: 4% auto;
        border: 4px solid whitesmoke;
        border-radius: 50%;/* 50% on a square image turns it into a circle */
    }

    /* status bar, same color as the card's border */
    & h2 {
        margin: 4% 0;
        padding: 2%;
        background-color: ${(props) => (props.status === "Alive" ? '#97ce4c' : props.status === "Dead" ? '#e4572e' : '#8d99a6')};
        color: #0d1b1e;
        border-radius: 20px; /* rounds the ends of the bar so it looks like a pill */
        font-size: calc(3px + 1.1vw);
        text-transform: uppercase;
    }
`;

export default function RickAndMorty(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.status}>
                        <h1>{char.name}</h1>
                        <h3>{char.species !== "Human" ? "(Not Human)" : ""}</h3>
                        <img src={char.image} alt={`image of ${char.name}`} />
                        <h2> {char.status}</h2>
                        <h3> Gender: {char.gender}</h3>
                        <h3> Location: {char.location.name}</h3>
                        <h3>  ID: {char.id}</h3>

                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}