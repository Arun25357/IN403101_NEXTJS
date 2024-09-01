import Link from "next/link";
import styles from "./page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/pokemon">Pokemon</Link>
      <Link href="/aboutme">AboutMe</Link>
    </nav>
  );
}
