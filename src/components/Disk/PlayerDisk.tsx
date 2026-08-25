interface Props {
  width?: number;
  height?: number;
}

function PlayerDisk({ width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 416.17863 416.17812"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="j">
          <stop offset={0} stopColor="#1a1a1a" stopOpacity={1} />
          <stop offset={1} stopColor="#626262" stopOpacity={0} />
        </linearGradient>
        <filter
          id="k"
          x={-0.030598301}
          y={-0.030598341}
          width={1.0611966}
          height={1.0611967}
          colorInterpolationFilters="sRGB"
        >
          <feFlood result="flood" floodOpacity={1} floodColor="#000" />
          <feGaussianBlur result="blur" in="SourceGraphic" stdDeviation={5} />
          <feOffset result="offset" in="blur" dx={0} dy={0} />
          <feComposite result="comp1" operator="out" in="flood" in2="offset" />
          <feComposite
            result="comp2"
            operator="atop"
            in="comp1"
            in2="SourceGraphic"
          />
        </filter>
        <filter
          x={-0.31322434}
          y={-0.3085888}
          width={1.6264487}
          height={1.6171776}
          colorInterpolationFilters="sRGB"
        >
          <feFlood result="flood" floodOpacity={1} floodColor="#000" />
          <feGaussianBlur result="blur" in="SourceGraphic" stdDeviation={5} />
          <feOffset result="offset" in="blur" dx={0} dy={0} />
          <feComposite result="comp1" operator="in" in="flood" in2="offset" />
          <feComposite
            result="comp2"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
          />
        </filter>
        <filter
          id="l"
          x={-0.030598301}
          y={-0.030598341}
          width={1.0611966}
          height={1.0611967}
          colorInterpolationFilters="sRGB"
        >
          <feFlood result="flood" floodOpacity={1} floodColor="#000" />
          <feGaussianBlur result="blur" in="SourceGraphic" stdDeviation={5} />
          <feOffset result="offset" in="blur" dx={0} dy={0} />
          <feComposite result="comp1" operator="out" in="flood" in2="offset" />
          <feComposite
            result="comp2"
            operator="atop"
            in="comp1"
            in2="SourceGraphic"
          />
        </filter>
        <radialGradient
          xlinkHref="#j"
          id="m"
          cx={395.65723}
          cy={247.73973}
          fx={395.65723}
          fy={247.73975}
          r={215.56023}
          gradientTransform="matrix(.01989 -.9998 1.22076 .02429 85.358 637.302)"
          gradientUnits="userSpaceOnUse"
        />
        <filter
          id="n"
          x={-0.33404867}
          y={-0.33404867}
          width={1.6680973}
          height={1.6680973}
          colorInterpolationFilters="sRGB"
        >
          <feFlood result="flood" floodOpacity={1} floodColor="#000" />
          <feGaussianBlur result="blur" in="SourceGraphic" stdDeviation={5} />
          <feOffset result="offset" in="blur" dx={0} dy={0} />
          <feComposite result="comp1" operator="in" in="flood" in2="offset" />
          <feComposite
            result="comp2"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
          />
        </filter>
      </defs>
      <g
        fillOpacity={1}
        strokeLinecap="square"
        strokeMiterlimit={1.6}
        transform="translate(-45.91 150.026)"
      >
        <circle
          cx={254}
          cy={58.062878}
          r={205.59659}
          fill="#1e1e1e"
          stroke="none"
          strokeWidth={15.6662}
        />
        <g strokeWidth={14.9418}>
          <path
            d="M254-138.026A196.09 196.09 0 0057.91 58.063 196.09 196.09 0 00254 254.152a196.09 196.09 0 00196.09-196.09A196.09 196.09 0 00254-138.025z"
            fill="#1a1a1a"
            filter="url(#k)"
          />
          <path
            d="M254-138.026A196.09 196.09 0 0057.91 58.063 196.09 196.09 0 00254 254.152a196.09 196.09 0 00196.09-196.09A196.09 196.09 0 00254-138.025z"
            fill="url(#m)"
            stroke="none"
            filter="url(#l)"
          />
        </g>
        <circle
          cx={254}
          cy={58.062878}
          r={17.961454}
          fill="#1e1e1e"
          strokeWidth={10}
          filter="url(#n)"
        />
      </g>
    </svg>
  );
}

export default PlayerDisk;
