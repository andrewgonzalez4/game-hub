import React from 'react'
import { Card, CardBody, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const LoadingSkeleton = () => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={'hidden'}>
        <Skeleton height={'200px'} />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default LoadingSkeleton