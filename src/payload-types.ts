export interface Config {
  collections: {
    users: User
    pages: Page
    'menu-items': MenuItem
    reviews: Review
    media: Media
  }
  globals: {}
}

export interface User {
  id: string
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  salt?: string
  hash?: string
  loginAttempts?: number
  lockUntil?: string
  password: string
}

export interface Page {
  id: string
  title: string
  slug: string
  content?: any
  excerpt?: string
  featuredImage?: string | Media
  updatedAt: string
  createdAt: string
}

export interface MenuItem {
  id: string
  name: string
  description?: string
  price?: string
  category: 'starters' | 'mains' | 'desserts' | 'drinks' | 'lunch' | 'brunch'
  image?: string | Media
  available?: boolean
  updatedAt: string
  createdAt: string
}

export interface Review {
  id: string
  customerName: string
  review: string
  rating: number
  date: string
  approved?: boolean
  updatedAt: string
  createdAt: string
}

export interface Media {
  id: string
  alt?: string
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
}
