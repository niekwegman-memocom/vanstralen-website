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

            {/* TO SHARE */}
            <div className={styles.menuCategory}>
              <h2>To Share</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Brood met huisgemaakte kruidenboter, aoili en groene olijven</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 7,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Holtkamp bitterballen (6)</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 9,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Vega Cas&amp; Cas bitterballen (6)</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 9,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Kaasstengels (6)</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 8,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Krokante kip met Siracha-mayonaise</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 12,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Borrelplank &ldquo;Van Stralen&rdquo;</span>
                    <span className={styles.menuItemDesc}>4 bitterballen / 3 chicken bites / 4 kaastengels / 4 chorizo kroketjes — ook vegetarisch te bestellen</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 19,50</span>
                </div>
              </div>
              <div className={styles.menuNote}>
                <p>Iedere zondag oesterzondag — alle oesters € 1,50</p>
              </div>
            </div>

            {/* SPECIALS */}
            <div className={styles.menuCategory}>
              <h2>Specials</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Zwezerik krokant gebakken met rode port stroop</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 16,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Bloedworst &amp; uierboord mosterd en cornichons</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 9,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Brioche met eendenlever en ansjovis 2st</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 16,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Argentijnse grote gamba&apos;s 3st</span>
                    <span className={styles.menuItemDesc}>in een romige bisque met bieslook</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 14,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Gebakken Kikkerbillen met warme knoflooksaus</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 10,75</span>
                </div>
              </div>
            </div>

            {/* SEIZOENSSPECIALITEITEN */}
            <div className={styles.menuCategory}>
              <h2>Seizoensspecialiteiten</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItemGroup}>
                  <span className={styles.menuItemGroupTitle}>Iedere woensdag en donderdag — Kaasfondue</span>
                  <div className={styles.menuItem}>
                    <div className={styles.menuItemInfo}>
                      <span className={styles.menuItemName}>Traditioneel — onbeperkt brood en diverse groente</span>
                    </div>
                    <span className={styles.menuItemPrice}>€ 19,75</span>
                  </div>
                  <div className={styles.menuItem}>
                    <div className={styles.menuItemInfo}>
                      <span className={styles.menuItemName}>Met truffel — onbeperkt brood en diverse groente</span>
                    </div>
                    <span className={styles.menuItemPrice}>€ 20,75</span>
                  </div>
                  <div className={styles.menuItem}>
                    <div className={styles.menuItemInfo}>
                      <span className={styles.menuItemName}>Blauwe kaas — onbeperkt brood en diverse groente</span>
                    </div>
                    <span className={styles.menuItemPrice}>€ 21,75</span>
                  </div>
                </div>
              </div>
              <div className={styles.menuNote}>
                <p><strong>Special ieder weekend Vrij/Za/Zo</strong></p>
                <p>Chateaubriand stroganoff — aan tafel bereid 400gr — vanaf 2 personen</p>
                <p>Wijntip: Côtes du Rhône</p>
                <p><strong>€ 37,50 p.p.</strong></p>
              </div>
            </div>

            {/* LUNCH SPECIALS */}
            <div className={styles.menuCategory}>
              <h2>Lunch Specials <span className={styles.categorySubtitle}>tot 16.30</span></h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>&ldquo;Bistecca&rdquo;</span>
                    <span className={styles.menuItemDesc}>Dungesneden rosé runderrib, Parmezaanse kaas, truffelmayonaise</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 14,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Briochebroodje met rivierkreeft</span>
                    <span className={styles.menuItemDesc}>bieslookmayonaise en citroen</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 15,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Eggs Benedict</span>
                    <span className={styles.menuItemDesc}>brioche met 2 gepocheerde eieren, spinazie en hollandaise saus — + zalm € 4,00</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 12,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Uitsmijter</span>
                    <span className={styles.menuItemDesc}>2 eieren, casinobrood, spek, kaas, ham — + € 1,50</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 11,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Clubsandwich kip</span>
                    <span className={styles.menuItemDesc}>met spek, romaine sla en pikante mayonaise</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 15,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Croque Monsieur</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 8,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>12uurtje rundvlees of vega kroket</span>
                    <span className={styles.menuItemDesc}>soep naar keuze en eierslade</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 14,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Rustiek broodje Rundercarpaccio</span>
                    <span className={styles.menuItemDesc}>met truffelmayonaise</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 13,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Rustiek broodje gerookte zalm</span>
                    <span className={styles.menuItemDesc}>met wasabimayonaise</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 14,75</span>
                </div>
              </div>
            </div>

            {/* VOORGERECHTEN */}
            <div className={styles.menuCategory}>
              <h2>Voorgerechten</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Rundercarpaccio met truffelmayonaise</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 14,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Steak tartaar</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 15,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Blini&apos;s met gerookte zalm, creme fraiche, appel en dille</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 14,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Escargots gegratineerd met kaas</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 13,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Pittige gamba&apos;s piri piri</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 13,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Cocktail Monica</span>
                    <span className={styles.menuItemDesc}>met geplukte kip, mandarijnen en cocktailsaus</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 12,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Gebakken champignons gegratineerd met gorgonzola</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 9,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Dungesneden eendenborst</span>
                    <span className={styles.menuItemDesc}>gorgonzola, walnoot, rode port</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 13,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Tonijntataki met teriyaki en bosui</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 14,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Oesters om mee te beginnen p.stuk</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 3,00</span>
                </div>
              </div>
            </div>

            {/* SOEPEN */}
            <div className={styles.menuCategory}>
              <h2>Soepen</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Uiensoep gegratineerd met kaas</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 7,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Vissoep à la Joey</span>
                    <span className={styles.menuItemDesc}>vissoep op Marokkaanse wijze</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 12,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Dubbel getrokken ossenstaartsoep met peterselie</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 8,75</span>
                </div>
              </div>
            </div>

            {/* SALADE */}
            <div className={styles.menuCategory}>
              <h2>Salade</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Warm geitenkaasje uit de oven met een frisse salade</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 12,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Salade niçoise met gegrilde tonijn</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 16,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Salade caesar met kip en bacon</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 15,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Salade gerookte zalm</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 16,50</span>
                </div>
              </div>
            </div>

            {/* EXTRA */}
            <div className={styles.menuCategory}>
              <h2>Extra</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Eendenlever</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 6,00</span>
                </div>
              </div>
            </div>

            {/* HOOFDGERECHTEN */}
            <div className={styles.menuCategory}>
              <h2>Hoofdgerechten</h2>
              <p className={styles.categoryDescription}>Onze hoofdgerechten worden geserveerd met seizoensgroente</p>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Steak bearnaise — Bavette 200gr</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 25,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Ribs frites &ldquo;Onze klassieker&rdquo;</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 26,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Oma&apos;s stoof &ldquo;alleen hoe Ed hem maakt&rdquo;</span>
                    <span className={styles.menuItemDesc}>met rodekool en puree</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 25,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Tournedos &ldquo;Van Stralen&rdquo;</span>
                    <span className={styles.menuItemDesc}>of pepersaus</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 34,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Steak tartaar 180gr</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 32,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Eendenborst met sinaasappelsaus</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 25,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Gebakken kalfslever</span>
                    <span className={styles.menuItemDesc}>spek, ui en appelcompote</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 24,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Gamba&apos;s spaghetti</span>
                    <span className={styles.menuItemDesc}>chili, knoflook en citroen</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 24,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Noordzeetong 300gr à la meunière</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 37,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Tonijnsteak met wasabisaus</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 28,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Rogvleugel met beurre noisette</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 36,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Aardappel anders ovenschotel</span>
                    <span className={styles.menuItemDesc}>met vegetarisch gehakt</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 19,75</span>
                </div>
              </div>
            </div>

            {/* BIJGERECHT */}
            <div className={styles.menuCategory}>
              <h2>Bijgerecht</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Frietjes met Belgische mayonaise</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 4,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Gebakken aardappels</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 4,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Loaded frites</span>
                    <span className={styles.menuItemDesc}>met parmezaan, bosui en truffelmayonaise</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 7,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Little gem met caesar-dressing</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 4,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Maisribs met koriander-chiliboter en parmezaan</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 6,50</span>
                </div>
              </div>
            </div>

            {/* DESSERT */}
            <div className={styles.menuCategory}>
              <h2>Dessert</h2>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Dame Blanche</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 7,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Crème brûlée &ldquo;klassieker&rdquo;</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 8,25</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Scroppino</span>
                    <span className={styles.menuItemDesc}>citroen of passievrucht</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 9,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Triffle</span>
                    <span className={styles.menuItemDesc}>met sinaasappel, chocola en bastogne</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 9,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Kaasplankje 3 Franse kaasjes</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 12,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Stroopwafelparfait met caramelsaus</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 7,50</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Coffee Affogato</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 6,75</span>
                </div>
                <div className={styles.menuItem}>
                  <div className={styles.menuItemInfo}>
                    <span className={styles.menuItemName}>Espresso Martini</span>
                  </div>
                  <span className={styles.menuItemPrice}>€ 11,50</span>
                </div>
              </div>
            </div>

            <div className={styles.menuClosingNote}>
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
