import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./anim";
export default function index() {
  const phrase =
    "I didn't want any of this. Didn't want you to die. You never had to save me. All I ever wanted was for you to live.";
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
          I ain't normal. You said so yourself before. I'm different. I am. You
          just don't get it.
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
