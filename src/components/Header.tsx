'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>VanStralen</span>
        </Link>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/menu" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link href="/groepen" onClick={() => setMobileMenuOpen(false)}>Groepen</Link>
          <Link href="/pasen-2026" onClick={() => setMobileMenuOpen(false)}>Pasen 2026</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link href="/vacatures" onClick={() => setMobileMenuOpen(false)}>Vacatures</Link>
        </nav>
      </div>
    </header>
  )
}
