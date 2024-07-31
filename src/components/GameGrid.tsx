import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game } from '../hooks/useGames';
import GameCard from './GameCard';
import LoadingSkeleton from './LoadingSkeleton';
import GameCardContainer from './GameCardContainer';
import useData from '../hooks/useData';


const GameGrid = () => {
    const {data, error, isLoading} = useGames();

    const skeletons = [1,2,3,4,5,6];

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={'10px'} spacing={10}>
            {isLoading && skeletons.map(skeleton => 
            <GameCardContainer>
                <LoadingSkeleton key={skeleton} />
            </GameCardContainer> )}
            {!isLoading && data.map((game)=>(
                <GameCardContainer>
                    <GameCard key={game.id} game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid