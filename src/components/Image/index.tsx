import React, { useEffect, useState } from "react";

import NImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Image = ({ src, alt, ...props }: ImageProps) => {
  const [source, setSource] = useState(src);

  return (
    <NImage
      alt={alt}
      src={source}
      onError={() => {
        setSource("/placeholder.png");
      }}
      {...props}
    />
  );
};

export default Image;
