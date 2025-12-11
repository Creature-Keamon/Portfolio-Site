import { motion, useMotionValue, useSpring } from "motion/react";
import PlayerDisk from "../components/PlayerDisk";
import { useRef, useState } from "react";
import PlayerBar from "../components/PlayerBar";
import Disk from "../components/Disk";

interface Props {
  Navigate: (item: string) => void;
}

function RotatingDisk({ Navigate }: Props) {
  document.body.style.backgroundColor = "rgba(87, 87, 87, 1)";
  document.body.style.overflow = "hidden";
  const [retract, setRetract] = useState(false);
  const [loadpage, setLoadPage] = useState(false);
  const [extend, setExtend] = useState(false);

  const openPage = (link: string) => {
    setRetract(true);
    setLoadPage(true);
    setTimeout(() => {
      Navigate(link);
    }, 2000);
  };

  const jokeDiskAction = () => {
    setRetract(true);
    setTimeout(() => {
      setExtend(true);
      setRetract(false);
    }, 2500);
    setTimeout(() => {
      setExtend(false);
    }, 2000);
  };

  const rotation = useMotionValue(0);
  const lastRotation = useRef(0);
  const turn = useSpring(rotation, {
    stiffness: 30,
  });

  return (
    <motion.div
      className="nav-wrapper"
      {...(loadpage === true && retract === true
        ? {
            animate: { opacity: 0 },
            transition: { ease: "linear", duration: 2 },
          }
        : {})}
    >
      <PlayerBar />
      <motion.div className="disk-wrapper">
        <motion.svg
          height="70vw"
          width="70vw"
          xmlns="http://www.w3.org/2000/svg"
          className="scroll-svg"
          onPan={(e, info) => {
            console.log(e);
            rotation.set(-(lastRotation.current + info.offset.x * 0.1));
          }}
          style={{ rotate: turn }}
          onPanStart={() => {
            rotation.set(-0);
          }}
          {...(retract === true
            ? {
                animate: { y: -700 },
                transition: { ease: "linear", duration: 2 },
              }
            : {})}
          {...(extend === true
            ? {
                animate: { y: 0 },
                transition: { ease: "linear", duration: 2 },
              }
            : {})}
        >
          <PlayerDisk />
          <Disk type="about" onClick={() => openPage("About")} />
          <Disk type="contact" onClick={() => openPage("Contact")} />
          <Disk type="project" onClick={() => openPage("Projects")} />
          <Disk type="joke" onClick={() => jokeDiskAction()} />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

export default RotatingDisk;
