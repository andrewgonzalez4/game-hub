import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { Game, Platform } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
import RatingComponent from './RatingComponent';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    game: Game;
}
const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize={'2xl'} textAlign={'center'}>
                {game.name}
            </Heading>
            <HStack justifyContent={'space-between'} marginY={1}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <RatingComponent rating={game.rating}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard