import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={283} height={64} />
    </>
  );
}

