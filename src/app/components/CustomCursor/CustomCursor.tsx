"use client"

import React, { MouseEventHandler, useEffect, useRef } from "react";
import styles from './CustomCursor.module.scss'
import gsap from "gsap";

const CustomCursor = () => {

  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e:MouseEvent):void => {
    gsap.to(cursorRef.current, {
      x: e.clientX, 
      y: e.clientY,
      duration: .2
    })

    gsap.to(followerRef.current, {
      x: e.clientX, 
      y: e.clientY,
      duration: .9
    })
  }

  useEffect(() => {

    gsap.set(cursorRef, {
      xPercent: 100,
      yPercent: 100
    });

    gsap.set(followerRef, {
      xPercent: -20,
      yPercent: -20
    })

    window.addEventListener('mousemove', moveCursor)
  }, [])  

  return(
    <div>
      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={followerRef} className={styles.cursor_follower}></div>
    </div>
  )
}

export default CustomCursor;
