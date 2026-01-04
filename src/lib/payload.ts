const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001'

export interface Media {
  id: string
  alt: string
  url: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  sizes?: {
    thumbnail?: { url: string; width: number; height: number }
    card?: { url: string; width: number; height: number }
    large?: { url: string; width: number; height: number }
  }
}
export interface BuiltForTeamsSection {
  id: string
  title: string
  integrationsText: string
  integrationsImage?: Media
}
export interface WhyTrustSection {
  id: string
  title: string
  ctaText: string
  ctaLink: string
  backgroundColor: string
}

export interface TrustStat {
  id: string
  title: string
  subtitle: string
  order: number
}
export interface TestimonialsSection {
  id: string
  title: string
  ctaText: string
  ctaLink: string
}
export interface TeamCategory {
  id: string
  name: string
  features: Array<{ text: string }>
  linkText: string
  linkUrl: string
  image: Media
  order: number
}
export interface Hero {
  id: string
  title: string
  subtitle: string
  emailPlaceholder: string
  ctaText: string
  ctaLink: string
  helperText: string
  heroImage?: Media
}

export interface Feature {
  id: string
  title: string
  description: string
  link?: string
  linkText?: string
  order: number
}

export interface FeaturesSection {
  id: string
  badge: string
  title: string
  ctaText: string
  ctaLink: string
}

export interface WorkTogetherSection {
  id: string
  title: string
  description: string
  linkText: string
  linkUrl: string
  image: Media
}

export interface IntegrationsSection {
  id: string
  title: string
  description: string
  linkText: string
  linkUrl: string
  image: Media
}

export interface WaysWeWorkSection {
  id: string
  backgroundImage: Media
  subtitle: string
  mainTitle: string
  description: string
  buttonText: string
  buttonUrl: string
}

export interface BuiltForWorkSection {
  id: string
  title: string
}

export interface WorkCategory {
  id: string
  name: string
  title: string
  description: string
  image: Media
  linkText: string
  linkUrl: string
  order: number
}

export interface TrustedSection {
  id: string
  text: string
}

export interface Testimonial {
  id: string
  company: string
  quote: string
  authorName: string
  authorRole: string
  authorCompany: string
  authorImage?: Media
  companyLogo?: Media
  order: number
}

export interface TrustedCompany {
  id: string
  name: string
  logo: Media
  order: number
}

export interface Integration {
  id: string
  name: string
  description?: string
  logo: Media
  category?: string
}

// Хелпер для получения полного URL изображения
export function getImageUrl(url?: string): string {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${PAYLOAD_API_URL}${url}`
}

// Generic fetch function
async function fetchFromPayload<T>(endpoint: string): Promise<T[]> {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/api/${endpoint}?depth=2`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.status}`)
    }

    const data = await res.json()
    return data.docs || []
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    return []
  }
}
export async function getWhyTrustSection(): Promise<WhyTrustSection | null> {
  const sections = await fetchFromPayload<WhyTrustSection>('why-trust-section')
  return sections[0] || null
}

// Получить Trust Stats
export async function getTrustStats(): Promise<TrustStat[]> {
  const stats = await fetchFromPayload<TrustStat>('trust-stats')
  return stats.sort((a, b) => a.order - b.order)
}
// Получить Hero секцию
export async function getHero(): Promise<Hero | null> {
  const heroes = await fetchFromPayload<Hero>('hero')
  return heroes[0] || null
}

// Получить Features Section
export async function getFeaturesSection(): Promise<FeaturesSection | null> {
  const sections = await fetchFromPayload<FeaturesSection>('features-section')
  return sections[0] || null
}

// Получить Features
export async function getFeatures(): Promise<Feature[]> {
  const features = await fetchFromPayload<Feature>('features')
  return features.sort((a, b) => a.order - b.order)
}

// Получить Work Together Section
export async function getWorkTogetherSection(): Promise<WorkTogetherSection | null> {
  const sections = await fetchFromPayload<WorkTogetherSection>('work-together-section')
  return sections[0] || null
}

// Получить Integrations Section
export async function getIntegrationsSection(): Promise<IntegrationsSection | null> {
  const sections = await fetchFromPayload<IntegrationsSection>('integrations-section')
  return sections[0] || null
}

// Получить Ways We Work Section
export async function getWaysWeWorkSection(): Promise<WaysWeWorkSection | null> {
  const sections = await fetchFromPayload<WaysWeWorkSection>('ways-we-work-section')
  return sections[0] || null
}

// Получить Built For Work Section
export async function getBuiltForWorkSection(): Promise<BuiltForWorkSection | null> {
  const sections = await fetchFromPayload<BuiltForWorkSection>('built-for-work-section')
  return sections[0] || null
}

// Получить Work Categories
export async function getWorkCategories(): Promise<WorkCategory[]> {
  const categories = await fetchFromPayload<WorkCategory>('work-categories')
  return categories.sort((a, b) => a.order - b.order)
}

// Получить Trusted Section
export async function getTrustedSection(): Promise<TrustedSection | null> {
  const sections = await fetchFromPayload<TrustedSection>('trusted-section')
  return sections[0] || null
}

// Получить Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const testimonials = await fetchFromPayload<Testimonial>('testimonials')
  return testimonials.sort((a, b) => a.order - b.order)
}

// Получить Trusted Companies
export async function getTrustedCompanies(): Promise<TrustedCompany[]> {
  const companies = await fetchFromPayload<TrustedCompany>('trusted-companies')
  return companies.sort((a, b) => a.order - b.order)
}

// Получить Integrations
export async function getIntegrations(): Promise<Integration[]> {
  return fetchFromPayload<Integration>('integrations')
}export async function getBuiltForTeamsSection(): Promise<BuiltForTeamsSection | null> {
  const sections = await fetchFromPayload<BuiltForTeamsSection>('built-for-teams-section')
  return sections[0] || null
}

// Получить Team Categories
export async function getTeamCategories(): Promise<TeamCategory[]> {
  const categories = await fetchFromPayload<TeamCategory>('team-categories')
  return categories.sort((a, b) => a.order - b.order)
}
export async function getTestimonialsSection(): Promise<TestimonialsSection | null> {
  const sections = await fetchFromPayload<TestimonialsSection>('testimonials-section')
  return sections[0] || null
}