import Image from 'next/image';

type IconProps = {
  name: string;
  width?: number;
  height?: number;
};

function Icon({ name, width, height }: IconProps) {
  return (
    <Image
      src={`/static/icons/${name}.svg`}
      width={width ?? 24}
      height={height ?? 24}
      priority={true}
      alt={`${name} icon`}
      className="h-auto w-auto"
    />
  );
}

export default Icon;
