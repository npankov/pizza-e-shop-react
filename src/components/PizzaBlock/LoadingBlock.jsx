import React from 'react';
import ContentLoader from 'react-content-loader';


function LoadingBlock(props) {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="275" rx="3" ry="3" width="280" height="25" />
      <rect x="0" y="316" rx="6" ry="6" width="280" height="86" />
      <rect x="0" y="424" rx="3" ry="3" width="91" height="27" />
      <rect x="128" y="415" rx="20" ry="20" width="152" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;