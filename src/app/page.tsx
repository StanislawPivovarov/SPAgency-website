"use client"

import Image from "next/image";
import styles from './page.module.scss'
import gsap, {Power3} from "gsap";
import { Col, Row } from "antd";
import { useEffect, useRef } from "react";

export default function Home() {

  let app = useRef(null)

  useEffect(() => {
    const wordsToAnimate = document.querySelectorAll(`.${styles.wrapper}`);

    // gsap.from(wordsToAnimate, {
    //   autoAlpha: 0,
    //   ease: Power3.easeInOut,
    //   delay: 0.8,
    //   stagger: 0.2,
    // });

    gsap.to(app.current, 1, { autoAlpha: 1}); // Use autoAlpha to control visibility

  }, []);

  return (
    <main className={styles.main}>
      <Row className={styles.content} justify={'center'} align={'middle'}>
        <Col span={22}>
          <div className={styles.hero}>
                <div className={styles.word}>Creative</div>
                <div className={styles.word}>web</div>
                <div className={styles.word}>developer</div>
                <div className={styles.word}>&</div>
                <div className={styles.word}>portrait</div>
                <div className={styles.word}>photographer</div>
          </div>
        </Col>
      </Row>
    </main>
  );
}
