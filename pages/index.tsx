import styles from "../styles/Home.module.css";
import { Canvas } from "components/Canvas";

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas />
    </div>
  );
}
