import useData from "./useData";

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


const useGames = () =>{
    return useData<Game>('/games');
}

export default useGames;