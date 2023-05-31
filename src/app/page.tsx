import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="m:h-[560px] s:h-[480px] relative flex h-[560px] w-screen items-center justify-center">
        <Image
          src="/static/images/landing-background.jpg"
          alt="landing-background"
          fill={true}
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
        <h1 className="welcome-gradient absolute text-center text-6xl font-extrabold sm:text-6xl  md:text-9xl ">
          Welcome
          <br />
          to Hawaii
        </h1>
      </div>
    </main>
  );
}
