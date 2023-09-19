import type { FC } from 'react';
import Link from 'next/link';

const Sample: FC = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <Link href={'sample'}>サンプルここ</Link>
    </>
  );
};

export default Sample;
