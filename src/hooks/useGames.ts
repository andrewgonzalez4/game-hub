import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
    background_image: string;
}

export interface Game{
    id: number;
    name: string,
    rating: number,
    background_image: string;
    parent_platforms: {platform: Platform}[];
}

interface FetchGamesResponse{
    count: number;
    next: string | null;
    previous: string | null;
    results: Game[];
}

const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(()=>{

        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
        .then(res => {
            setGames(res.data.results)
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
        })
        return () => controller.abort();

    }, [])
    return {games, error};
}

export default useGames;