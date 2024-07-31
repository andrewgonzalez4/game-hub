import useData from "./useData";

export interface Platform{
    id: number;
    name: string;
    slug: string;
    platforms: Platform[];
}

const usePlatforms = () =>{
    return useData<Platform>('/platforms/lists/parents');
};


export default usePlatforms;