import { motion, transform, useMotionValue, useSpring } from "motion/react";
import PlayerDisk from "./components/PlayerDisk";
import { useRef } from "react";
import PlayerBar from "./components/PlayerBar";
import Disk from "./components/Disk";
import { animate } from "motion";

interface Props {
  Navigate: (item: string) => void;
}

function RotatingDisk({ Navigate }: Props) {
  let triggerAnim = 0;
  const openPage = (link: string) => {
    triggerAnim = 1;
    setTimeout(() => {
      Navigate(link);
    }, 2000);
  };

  const rotation = useMotionValue(0);
  const lastRotation = useRef(0);
  const turn = useSpring(rotation, {
    stiffness: 30,
  });

  return (
    <div className="nav-wrapper">
      <PlayerBar />
      <motion.div className="disk-wrapper">
        <motion.svg
          height="70vw"
          width="70vw"
          xmlns="http://www.w3.org/2000/svg"
          className="scroll-svg"
          onPan={(e, pointInfo) => {
            rotation.set(-(lastRotation.current + pointInfo.offset.x * 0.1));
          }}
          style={{ rotate: turn }}
          onPanStart={(e, pointinfo) => {
            rotation.set(-0);
          }}
          {...(triggerAnim === 1 ? { animate: { y: 1000 } } : {})}
        >
          <PlayerDisk />
          <Disk type="about" onClick={() => openPage("About")} />
          <Disk type="contact" onClick={() => openPage("Contact")} />
          <Disk type="project" onClick={() => openPage("Projects")} />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default RotatingDisk;
