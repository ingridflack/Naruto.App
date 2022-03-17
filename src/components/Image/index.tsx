import React, { useEffect, useState } from "react";
import NImage from "next/image";

const Image = ({ src, alt, ...props }: any) => {
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
