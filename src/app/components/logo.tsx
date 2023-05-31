import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/static/images/aloha.png"
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
