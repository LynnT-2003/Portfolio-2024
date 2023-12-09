"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Project from "../Project";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.075 * direction;
  };

  const projects = [
    {
      title: "C2 Montreal",

      src: "c2montreal.png",

      color: "#000000",
    },

    {
      title: "Office Studio",

      src: "officestudio.png",

      color: "#8C8C8C",
    },

    {
      title: "Locomotive",

      src: "locomotive.png",

      color: "#EFE8D3",
    },

    {
      title: "Silencio",

      src: "silencio.png",

      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <main className={styles.main}>
        <Image src="/lynn.png" fill={true} alt="background" />
        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Lynn Thit Nyi Nyi -</p>
            <p ref={secondText}>Lynn Thit Nyi Nyi -</p>
          </div>
        </div>

        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
