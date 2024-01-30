import Image from "next/image";
import styles from "./page.module.css";
//import bootstrap from 'bootstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
    
        <Link href="/feature1">
          <button className="btn btn-primary">To feature 1</button>
        </Link>
        <div></div>
        <Link href="/feature2"><button className="btn btn-primary">To feature 2</button></Link>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        

      

        

        
      </div>
    </main>
  );
}
