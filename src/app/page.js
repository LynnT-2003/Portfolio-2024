"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Project from "../components/Project";
import Landing from "../components/Landing";
import Modal from "../components/Modal";
import Description from "../components/Description";
import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";

const projects = [
  {
    title: "Web Application",
    src: "lucy.png",
    color: "#000000",
  },
  {
    title: "Data Mining",
    src: "police.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Big Data Analytics",
    src: "rebec.jpg",
    color: "#8C8C8C",
  },
  {
    title: "Machine Learning",
    src: "moon.png",
    color: "#706D63",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(false);

      document.body.style.cursor = "default";

      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <main className={styles.main}>
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
          <Modal modal={modal} projects={projects} />
        </div>
      </main>
      <SlidingImages />
      <Contact />
    </>
  );
}
