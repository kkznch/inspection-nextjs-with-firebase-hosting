import { GetServerSideProps } from 'next/types';

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps = (async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: Repo;
}>;

const Sample = ({ repo }: { repo: any }) => {
  return (
    <>
      <h1>ほげほげ</h1>
      <p>name: {repo.name}</p>
      <p>stargazers_count: {repo.stargazers_count}</p>
    </>
  );
};

export default Sample;
