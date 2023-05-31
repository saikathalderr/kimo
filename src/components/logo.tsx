import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  light?: boolean;
};

function Logo(props: LogoProps) {
  const { light } = props;
  const logoName = light ? 'aloha-light' : 'aloha';
  return (
    <Link href="/">
      <Image
        src={`/static/images/${logoName}.png`}
        width={100}
        height={35}
        priority={true}
        alt="Aloha"
        className="h-auto w-auto cursor-pointer"
      />
    </Link>
  );
}

export default Logo;
