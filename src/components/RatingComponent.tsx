import React from 'react'
import { Badge } from '@chakra-ui/react'

interface Props{
    rating: number;
}

const RatingComponent = ({rating}: Props) => {
  return (
    <Badge colorScheme={rating > 4 ? 'green' : rating > 3 ? 'yellow': 'red'} justifyItems={'right'} borderRadius={2}>{rating}</Badge>
  )
}

export default RatingComponent