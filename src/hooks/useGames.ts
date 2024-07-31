import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id: number;
    name: string;
    slug: string;
    platforms: Platform[];
    background_image: string;
}

export interface Game{
    id: number;
    name: string,
    rating: number,
    background_image: string;
    parent_platforms: {platform: Platform}[];
}


const useGames = (gameQuery: GameQuery) =>{
    return useData<Game>('/games', {params: {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id}}, [gameQuery]);
}

export default useGames;