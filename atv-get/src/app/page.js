import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> Harry Potter World Houses </h1>

      <ul>
        <li> <Link href="/server-side"> Server-Side Rendered Houses </Link> </li>
        <li> <Link href="/client-side"> Client-Side Rendered Houses </Link> </li>
      </ul>
    </main>
  );
}
