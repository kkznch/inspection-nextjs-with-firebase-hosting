import { GetServerSideProps } from 'next/types';
import {
  Card,
  Text,
  CardBody,
  Spinner,
  Box,
  SkeletonCircle,
  SkeletonText,
  Button,
} from '@chakra-ui/react';

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps = (async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  console.log('バックエンドでリクエストしてるよ');
  console.log(repo);
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: Repo;
}>;

const Page = ({ repo }: { repo: any }) => {
  return (
    <Card>
      <CardBody>
        <Text>name: {repo.name}</Text>
        <Text>stargazers_count: {repo.stargazers_count}</Text>
      </CardBody>
      <Spinner color='red.500' size='xl' />
      <Spinner color='red.500' size='xl' />
      <Spinner color='red.500' size='xl' />
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Button>カスタムボタンだよ</Button>
    </Card>
  );
};

export default Page;
