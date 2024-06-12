import Image from "next/image";

interface IGithubImageProps {
  classname?: string;
  width: number;
  height: number;
}

const GithubImage = ({ classname, width, height }: IGithubImageProps) => {
  return ( 
    <Image 
      className={classname}
      src={`data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23181717' d='M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 2-.8.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.3-5.5-6.1 0-1.4.5-2.6 1.2-3.5-.1-.3-.6-1.5.1-3 0 0 1.1-.3 3.6 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.5-1.6 3.6-1.3 3.6-1.3.7 1.5.2 2.7.1 3 .7.9 1.2 2 1.2 3.5 0 4.9-2.8 5.8-5.5 6.1.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z'/%3E%3C/svg%3E`}
      width={width}
      height={height}
      alt="github"
    />
  );
}

export default GithubImage;
