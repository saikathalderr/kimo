import React from 'react';
import Image from 'next/image';

type HeroProps = {
  title: React.ReactNode;
  image?: string;
};

function Hero(props: HeroProps) {
  const { title, image } = props;

  const bgImage: string = image ?? '/static/images/landing-background.jpg';

  return (
    <div className="m:h-[560px] s:h-[480px] relative flex h-[560px] w-screen items-center justify-center">
      <Image
        src={bgImage}
        alt="landing-background"
        fill={true}
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
        priority
      />
      <div className="welcome-gradient absolute text-center text-5xl font-extrabold sm:text-5xl md:text-8xl lg:text-9xl">
        {title}
      </div>
    </div>
  );
}

export default Hero;
