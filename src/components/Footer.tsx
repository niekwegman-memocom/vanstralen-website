import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>VanStralen</h3>
          <p>Een extra huiskamer in hartje Kralingen</p>
        </div>

        <div className={styles.section}>
          <h3>Contact</h3>
          <p>Oudedijk 110-112</p>
          <p>3061 AN Rotterdam</p>
          <p>Tel: 010-4148883</p>
          <p>Email: etenbijvanstralen@outlook.com</p>
        </div>

        <div className={styles.section}>
          <h3>Openingstijden</h3>
          <p>Woensdag t/m Zondag</p>
          <p>Vanaf 12:00 uur</p>
          <p>Keuken open tot 22:00</p>
        </div>

        <div className={styles.section}>
          <h3>Social Media</h3>
          <p>
            <a href="https://facebook.com/etenbijvanstralen" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} VanStralen. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  )
}
