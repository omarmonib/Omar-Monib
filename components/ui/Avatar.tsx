import Image, { StaticImageData } from 'next/image';

type AvatarProps = {
  src: StaticImageData;
  alt: string;
};

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="w-36 h-36 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-2 md:ring-4 ring-white/60">
      <Image src={src} alt={alt} className="object-cover w-full h-full" priority />
    </div>
  );
}
