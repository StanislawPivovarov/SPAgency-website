"use client"

import React from "react";
import styles from './Header.module.scss';
import Image from "next/image";
import logo from '@/app/assets/logo.svg'
import { Row, Col } from "antd";
import Hamburger from "hamburger-react";


const Header = () => {
  return (
    <div className={styles.header}>
      <Row className={styles.content} justify={'center'} align={'middle'}>
        <Col span={20}>
          <Row justify={'space-between'}>
            <Col>
              <Image src={logo} alt="logo" />
            </Col>
            <Col>
            <Hamburger color="#fff" easing="ease-in" />
            </Col>
          </Row>

        </Col>
      </Row>
    </div>
  )
}

export default Header;
