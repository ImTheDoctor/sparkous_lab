import styles from "./page.module.css";
import ComingSoon from "@/components/coming-soon/Coming-soon";

export default function Home() {
  return (
    <main className={styles.main}>
      <ComingSoon />
    </main>
  );
}
