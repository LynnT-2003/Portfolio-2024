"use client";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import Project from "../components/Project";
import Landing from "../components/Landing";
import Modal from "../components/Modal";
import Description from "../components/Description";
import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "TBH-Chatbot Web App",
    linl: "https://tbh-chatbot-product-page.vercel.app/",
    subtitle: "Sophomore Year Senior Project",
    src: "lucy.png",
    color: "#000000",
  },
  {
    title: "TutorPlus Mobile App",
    link: "https://tutorplus-landing-page-amwqk50o7-lynnt-2003.vercel.app/",
    subtitle: "University D*Code Club Project",
    src: "police.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Lynnime AnimeList",
    subtitle: "First Kotlin Android Application",
    src: "moon.png",
    color: "#706D63",
  },
  {
    title: "Fullstack E-Commerce ",
    link: "https://github.com/LynnT-2003/Lynnime-Animelist",
    subtitle: "Junior Year Summer Web Project",
    link: "https://ecommerce-sanity-stripe-lynnt-2003.vercel.app/",
    src: "rebec.jpg",
    color: "#8C8C8C",
  },
];

export default function Home() {
  const router = useRouter();
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

      <div className={styles.about}>
        <div>
          <h1>Check out my latest projects.</h1>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <div
                onClick={() => {
                  if (project.link) {
                    router.push(project.link);
                  }
                }}
              >
                <Project
                  index={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  setModal={setModal}
                  key={index}
                />
              </div>
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
