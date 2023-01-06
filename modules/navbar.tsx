import Headroom from "react-headroom";
import styles from '../src/styles/navbar.module.css';
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [baropen, setBarOpen] = useState(false);

  return (
    <Headroom className={styles.navcon}>
      <div className={styles.desktoplinks}>
        <h3 className={styles.route}>Link1</h3>
        <h3 className={styles.route}>Link2</h3>
        <h3 className={styles.route}>Link3</h3>
      </div>
      <div className={styles.mobilemenu}>
        <Image
          onClick={() => {
            setBarOpen(!baropen);
          }}
          src="/menu-burger.png"
          height="58"
          width="58"
          alt="menu"
        />
      </div>
      <div
        style={{ display: baropen ? "flex" : "none" }}
        className={styles.sidemenu}
      >
        <h3 className={styles.mobileroute}>Link1</h3>
        <h3 className={styles.mobileroute}>Link2</h3>
        <h3 className={styles.mobileroute}>Link3</h3>
      </div>
    </Headroom>
  );
}
