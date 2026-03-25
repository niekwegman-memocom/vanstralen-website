import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function MenuPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <h1>Onze Menukaart</h1>
            <p>Wisselende menukaart vol met seizoensgebonden gerechten</p>
          </div>
        </section>

        <section className={styles.menuSection}>
          <div className={styles.container}>
            <div className={styles.menuIntro}>
              <p>
                Van lunch tot laat is de hele kaart à la carte te bestellen.
                Onze menukaart wisselt regelmatig met de seizoenen om u altijd de beste en meest verse ingrediënten te bieden.
              </p>
            </div>

            <div className={styles.menuCategory}>
              <h2>Lunch & Brunch</h2>
              <p className={styles.categoryDescription}>
                Perfect voor een ontspannen middag met vrienden of familie
              </p>
            </div>

            <div className={styles.menuCategory}>
              <h2>Voorgerechten</h2>
              <p className={styles.categoryDescription}>
                Begin uw culinaire ervaring met onze verfijnde voorgerechten
              </p>
            </div>

            <div className={styles.menuCategory}>
              <h2>Hoofdgerechten</h2>
              <p className={styles.categoryDescription}>
                Van klassieke gerechten tot seizoensgebonden specialiteiten
              </p>
              <div className={styles.highlight}>
                <p><strong>Aanbevolen:</strong> Zacht gestoofde fazantenboutjes met zuurkool en een stoofpeertje</p>
                <p><strong>Populair:</strong> Chateaubriand Stroganoff - aan tafel bereid!</p>
                <p><strong>Favoriet:</strong> Spareribs - altijd een aanrader</p>
              </div>
            </div>

            <div className={styles.menuCategory}>
              <h2>Nagerechten</h2>
              <p className={styles.categoryDescription}>
                Een zoete afsluiting van uw maaltijd
              </p>
            </div>

            <div className={styles.menuNote}>
              <h3>Speciale wensen?</h3>
              <p>
                Wij kunnen eventueel ook een aangepast keuze-menu op maat verzorgen geheel naar uw dieet en wensen!
                Neem contact met ons op om de mogelijkheden te bespreken.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
