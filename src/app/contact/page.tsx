import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <h1>Contact & Bereikbaarheid</h1>
            <p>Wij horen graag van u!</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h2>Eten bij VanStralen</h2>

                <div className={styles.infoBlock}>
                  <h3>Adres</h3>
                  <p>Oudedijk 110-112</p>
                  <p>3061 AN Rotterdam</p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Telefoon</h3>
                  <p><a href="tel:0104148883">010-4148883</a></p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>E-mail</h3>
                  <p><a href="mailto:etenbijvanstralen@outlook.com">etenbijvanstralen@outlook.com</a></p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Openingstijden</h3>
                  <p>Wij zijn iedere woensdag t/m zondag geopend vanaf 12:00</p>
                  <p>Keuken is geopend tot 22:00</p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Parkeren</h3>
                  <p>Maandag t/m zondag betaald parkeren tot 23:00 uur</p>
                  <p>Zone 630/632</p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Social Media</h3>
                  <p>
                    <a href="https://facebook.com/etenbijvanstralen" target="_blank" rel="noopener noreferrer">
                      Facebook: etenbijvanstralen
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.mapPlaceholder}>
                <div className={styles.mapBox}>
                  <p>📍 Kaart</p>
                  <p className={styles.mapText}>Oudedijk 110-112</p>
                  <p className={styles.mapText}>Rotterdam Kralingen</p>
                </div>
              </div>
            </div>

            <div className={styles.reservationNote}>
              <h3>Reserveren</h3>
              <p>
                Voor reserveringen kunt u ons bellen op <strong>010-4148883</strong> of
                een e-mail sturen naar <strong>etenbijvanstralen@outlook.com</strong>.
              </p>
              <p>
                Wij raden aan om vooral in het weekend vooraf te reserveren om teleurstelling te voorkomen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
