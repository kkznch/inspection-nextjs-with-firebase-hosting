import type { FC } from 'react';
import { Spinner, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';

const Sample: FC = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <Spinner color='red.500' size='xl' />
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </>
  );
};

export default Sample;
