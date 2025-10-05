import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col flex-1 min-w-0"
    >
      <div className="relative w-full h-48 bg-gray-900 flex-shrink-0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative p-4 flex-1 flex flex-col">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-justify">{description}</p>
      </div>
    </Link>
  );
};
