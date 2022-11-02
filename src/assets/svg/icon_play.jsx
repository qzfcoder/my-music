import React, { memo } from "react";

const IconPlay = memo((props) => {
  const { width = 12, height = 12 } = props;
  return (
    <svg
      t="1667180902635"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5681"
      width={width}
      height={height}
    >
      <path
        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
        p-id="5682"
        fill="#ffffff"
      ></path>
      <path
        d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
        p-id="5683"
        fill="#ffffff"
      ></path>
    </svg>
  );
});

export default IconPlay;
