import { GetServerSideProps } from 'next/types';

type SampleProp = {
  message: string;
};

export const getServerSideProps = (async (context) => {
  return { props: { sampleProp: { message: 'SSR動かしてるなう' } } };
}) satisfies GetServerSideProps<{ sampleProp: SampleProp }>;

const Sample = ({ sampleProp }: { sampleProp: any }) => {
  return (
    <>
      <h1>ほげほげ</h1>
      <p>message: {sampleProp.message}</p>
    </>
  );
};

export default Sample;
