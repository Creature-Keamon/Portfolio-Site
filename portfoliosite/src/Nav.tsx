import { motion, useScroll } from "motion/react";

interface Props {
  Navigate: (item: string) => void;
}

function RotatingDisk({ Navigate }: Props) {
  const { scrollY } = useScroll();

  return (
    <div className="disk-wrapper">
      <motion.svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="scroll-disk"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stop-color="yellow" />
            <stop offset="100%" stop-color="red" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="50vw"
          r="40vw"
          fill="url(#grad1)"
          style={{ rotate: scrollY }}
        />
      </motion.svg>
    </div>
  );
}

export default RotatingDisk;
