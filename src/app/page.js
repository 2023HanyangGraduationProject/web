import Image from 'next/image'
import styles from './page.module.css'
import Wallet from './_components/Wallet'
// import NavBar from './_components/NavBar/NavBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/img/SoulTicket.png"
          alt="SoulTicket Logo"
          width={430}
          height={120}
          priority
        />
      </div>
      <Wallet />
      {/* Tailwind CSS 예시 */}
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}

    </main>
  )
}
