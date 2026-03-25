import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function VacaturesPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <h1>Vacatures</h1>
            <p>Word onderdeel van ons team!</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2>Werken bij VanStralen</h2>
              <p>
                VanStralen is een intiem, eigentijds familiebedrijf in hartje Kralingen.
                Wij staan voor ultieme gastvrijheid en een warme, ontspannen sfeer.
                Ben jij enthousiast en heb je een passie voor de horeca? Dan horen wij graag van je!
              </p>
            </div>

            <div className={styles.jobSection}>
              <h3>Wat wij bieden</h3>
              <ul className={styles.benefitsList}>
                <li>Een gezellig en hecht team</li>
                <li>Werken in een authentiek restaurant met vaste gasten</li>
                <li>Mogelijkheden voor groei en ontwikkeling</li>
                <li>Flexibele werktijden</li>
                <li>Goede sfeer en werkklimaat</li>
              </ul>
            </div>

            <div className={styles.jobSection}>
              <h3>Wat wij zoeken</h3>
              <ul className={styles.requirementsList}>
                <li>Enthousiaste en gastvrije mensen</li>
                <li>Teamspelers met een positieve instelling</li>
                <li>Ervaring in de horeca is een pré, maar niet vereist</li>
                <li>Beschikbaar in de avonden en/of weekenden</li>
              </ul>
            </div>

            <div className={styles.cta}>
              <h3>Interesse?</h3>
              <p>
                Heb je interesse om bij ons te komen werken? Stuur dan je CV en motivatie naar:
              </p>
              <p className={styles.email}>
                <a href="mailto:etenbijvanstralen@outlook.com">etenbijvanstralen@outlook.com</a>
              </p>
              <p>
                Of kom langs voor een kennismaking! Je bent altijd welkom op onze openingstijden
                (woensdag t/m zondag vanaf 12:00).
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
