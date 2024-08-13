"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DummyTodoCard from "./DummyTodoCard";
import { dummyTodos } from "../config/dummyTodos";

const AnimationContainer = styled.div`
  position: absolute;
  right: 40%;
  top: 40%;
  perspective: 1000px;

  @media (max-width: 1050px) {
    top: 35rem;
    left: 37%;
    transform: translateX(-50%);
  }

  @media (max-width: 550px) {
    top: 35rem;
    left: 30%;
    transform: translateX(-50%) scale(0.7);
  }
`;

export default function TodosAnimation() {
  const [dummyTodosState, setDummyTodosState] = useState(dummyTodos);

  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  const completeTodo = (id: string) => {
    setDummyTodosState((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 1 },
      repeat: -1,
    });

    tl.to(thirdRef.current, { translateY: "-11rem" }, "+=0.5")
      .to(
        thirdRef.current,
        {
          translateX: "-6rem",
          translateY: "-15rem",
          zIndex: 0,
        },
        "-=0.2"
      )
      .to(
        thirdRef.current,
        {
          translateY: "-6rem",
        },
        "-=0.2"
      )
      .to(
        secondRef.current,
        {
          translateY: "2rem",
          translateX: "2rem",
          duration: 0.5,
        },
        "-=0.2"
      )
      .to(
        firstRef.current,
        {
          translateY: "2rem",
          translateX: "2rem",
          duration: 0.5,
        },
        "-=0.2"
      )
      .to(
        thirdRef.current,
        {
          translateY: "-4rem",
          translateX: "-4rem",
          duration: 0.5,
        },
        "-=0.2"
      )
      .call(() => {
        completeTodo(dummyTodosState[2].id);
        completeTodo(dummyTodosState[1].id);
      })
      .to(secondRef.current, { translateY: "-9rem" }, "+=0.5")
      .to(
        secondRef.current,
        {
          translateX: "-4rem",
          translateY: "-13rem",
          zIndex: 0,
        },
        "-=0.2"
      )
      .to(
        secondRef.current,
        {
          translateY: "-4rem",
        },
        "-=0.2"
      )
      .to(
        firstRef.current,
        {
          translateY: "4rem",
          translateX: "4rem",
          duration: 0.5,
        },
        "-=0.2"
      )
      .to(
        thirdRef.current,
        {
          translateY: "-2rem",
          translateX: "-2rem",
          duration: 0.5,
        },
        "-=0.2"
      )
      .to(
        secondRef.current,
        {
          translateY: "-2rem",
          translateX: "-2rem",
          duration: 0.5,
        },
        "-=0.2"
      )
      .call(() => {
        completeTodo(dummyTodosState[1].id);
        completeTodo(dummyTodosState[0].id);
      })
      .to(
        firstRef.current,
        {
          translateY: "-8rem",
        },
        "+=0.5"
      )
      .to(
        firstRef.current,
        {
          translateX: "-2rem",
          translateY: "-10rem",
          zIndex: 0,
        },
        "-=0.2"
      )
      .to(
        firstRef.current,
        {
          translateY: "-2rem",
        },
        "-=0.2"
      )
      .to(
        thirdRef.current,
        {
          translateY: "0",
          translateX: "0",
          duration: 0.5,
        },
        "-=0.2"
      )
      .to(
        secondRef.current,
        {
          translateY: "0",
          translateX: "0",
          duration: 0.5,
        },
        "-=0.2"
      )
      .to(
        firstRef.current,
        {
          translateY: "0",
          translateX: "0",
          duration: 0.5,
        },
        "-=0.2"
      )
      .call(() => {
        completeTodo(dummyTodosState[0].id);
        completeTodo(dummyTodosState[2].id);
      });
  });

  return (
    <AnimationContainer>
      <DummyTodoCard
        {...dummyTodosState[0]}
        ref={firstRef}
        margin="0"
        zIndex={1}
      />
      <DummyTodoCard
        {...dummyTodosState[1]}
        ref={secondRef}
        margin="2rem"
        zIndex={2}
      />
      <DummyTodoCard
        {...dummyTodosState[2]}
        ref={thirdRef}
        margin="4rem"
        zIndex={3}
      />
    </AnimationContainer>
  );
}
