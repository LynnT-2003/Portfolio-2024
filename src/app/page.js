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
    title: "TBH-Chatbot Web App",
    subtitle: "University Senior Project",
    src: "lucy.png",
    color: "#000000",
  },
  {
    title: "TutorPlus Mobile App",
    subtitle: "University D*Code Project",
    src: "police.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Fullstack E-Commerce ",
    subtitle: "First Summer Web Project",
    src: "rebec.jpg",
    color: "#8C8C8C",
  },
  {
    title: "Lynnime AnimeList",
    subtitle: "First Android Application",
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
                subtitle={project.subtitle}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
      <SlidingImages />
      <Contact />
    </>
  );
}
