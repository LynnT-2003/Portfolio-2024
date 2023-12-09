import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./anim";
export default function index() {
  const phrase =
    "A Computer Science student, focused on learning new skills and expanding my expertise.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          style={{ marginTop: "40px" }}
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        {/* <div data-scroll data-scroll-speed={0.1}>
          <div className={styles.button}>
            <p>About me</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
