"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Project from "../components/Project";
import Landing from "../components/Landing";
import Modal from "../components/Modal";
import Description from "../components/Description";
import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";

const projects = [
  {
    title: "Web Dev",
    src: "lucy.png",
    color: "#000000",
  },
  {
    title: "Android Dev",
    src: "rebec.jpg",
    color: "#8C8C8C",
  },
  {
    title: "Data Analytics",
    src: "police.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Machine Learning",
    src: "moon.png",
    color: "#706D63",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
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
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
      <SlidingImages />
      <Contact />
    </>
  );
}
