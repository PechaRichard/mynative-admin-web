import React from "react";
import {useQuery, useQueryClient} from "react-query";
import styled from "styled-components";
import {listScreens} from "./api";

type Screen = {
    screens: Array<{title: string}>
}

export const Home = () => {
    const {isLoading, isError, data, error} = useQuery<Screen, any>('screens', listScreens);

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            <Title>admin web</Title>
            <ul>
                {data?.screens?.map((screen: any, index: number) => (
                    <li key={index}>{screen.title}</li>
                ))}
            </ul>
        </div>
    )
}


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
