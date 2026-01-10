const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL 

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

export function getImageUrl(url?: string): string {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${PAYLOAD_API_URL}${url}`
}

export interface HeaderNavItem {
  label: string
  type: 'link' | 'dropdown'
  url?: string
  dropdownItems?: Array<{ label: string; url: string }>
  order: number
}

export interface HeaderCTAButton {
  text: string
  url: string
  style: 'primary' | 'secondary' | 'text'
  order: number
}

export interface Header {
  logo: Media
  navigation: HeaderNavItem[]
  ctaButtons: HeaderCTAButton[]
}

export interface FooterLink {
  text: string
  url: string
  isHighlighted?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
  order: number
}

export interface Footer {
  columns: FooterColumn[]
  socialLinks: Array<{ platform: string; url: string }>
  copyrightText: string
  legalLinks: Array<{ text: string; url: string }>
  appStoreButton: { text: string; boldText: string; url: string }
  googlePlayButton: { text: string; boldText: string; url: string; icon?: Media }
  logo: Media
}

export async function getHeader(): Promise<Header | null> {
  try {
    const url = `${PAYLOAD_API_URL}/api/globals/header?depth=2`
    console.log('Fetching header from:', url)
    
    const res = await fetch(url, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      console.error('Error fetching header:', res.status)
      return null
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching header:', error)
    return null
  }
}

export async function getFooter(): Promise<Footer | null> {
  try {
    const url = `${PAYLOAD_API_URL}/api/globals/footer?depth=2`
    console.log('Fetching footer from:', url)
    
    const res = await fetch(url, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      console.error('Error fetching footer:', res.status)
      return null
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching footer:', error)
    return null
  }
}
async function fetchFromPayload<T>(endpoint: string): Promise<T[]> {
  try {
    const url = `${PAYLOAD_API_URL}/api/${endpoint}?depth=2`
    console.log('Fetching from:', url)
    
    const res = await fetch(url, {
      next: { revalidate: 60 },
      cache: 'no-store', 
    })

    console.log(`Response status for ${endpoint}:`, res.status)

    if (!res.ok) {
      const errorText = await res.text()
      console.error(`Error response for ${endpoint}:`, errorText)
      return []
    }

    const data = await res.json()
    console.log(`Found ${data.docs?.length || 0} items for ${endpoint}`)
    return data.docs || []
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    return []
  }
}

export async function getHero(): Promise<Hero | null> {
  const heroes = await fetchFromPayload<Hero>('hero')
  return heroes[0] || null
}

export async function getFeaturesSection(): Promise<FeaturesSection | null> {
  const sections = await fetchFromPayload<FeaturesSection>('features-section') 
  return sections[0] || null
}

export async function getFeatures(): Promise<Feature[]> {
  const features = await fetchFromPayload<Feature>('features')
  return features.sort((a, b) => a.order - b.order)
}

export async function getWorkTogetherSection(): Promise<WorkTogetherSection | null> {
  const sections = await fetchFromPayload<WorkTogetherSection>('work-together-section')
  return sections[0] || null
}

export async function getIntegrationsSection(): Promise<IntegrationsSection | null> {
  const sections = await fetchFromPayload<IntegrationsSection>('integrations-section')
  return sections[0] || null
}

export async function getWaysWeWorkSection(): Promise<WaysWeWorkSection | null> {
  const sections = await fetchFromPayload<WaysWeWorkSection>('ways-we-work-section')
  return sections[0] || null
}

export async function getBuiltForWorkSection(): Promise<BuiltForWorkSection | null> {
  const sections = await fetchFromPayload<BuiltForWorkSection>('built-for-work-section')
  return sections[0] || null
}

export async function getWorkCategories(): Promise<WorkCategory[]> {
  const categories = await fetchFromPayload<WorkCategory>('work-categories')
  return categories.sort((a, b) => a.order - b.order)
}

export async function getTrustedSection(): Promise<TrustedSection | null> {
  const sections = await fetchFromPayload<TrustedSection>('trusted-section')
  return sections[0] || null
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const testimonials = await fetchFromPayload<Testimonial>('testimonials')
  return testimonials.sort((a, b) => a.order - b.order)
}

export async function getTrustedCompanies(): Promise<TrustedCompany[]> {
  const companies = await fetchFromPayload<TrustedCompany>('trusted-companies')
  return companies.sort((a, b) => a.order - b.order)
}

export async function getIntegrations(): Promise<Integration[]> {
  return fetchFromPayload<Integration>('integrations')
}

export async function getBuiltForTeamsSection(): Promise<BuiltForTeamsSection | null> {
  const sections = await fetchFromPayload<BuiltForTeamsSection>('built-for-teams-section')
  return sections[0] || null
}

export async function getTeamCategories(): Promise<TeamCategory[]> {
  const categories = await fetchFromPayload<TeamCategory>('team-categories')
  return categories.sort((a, b) => a.order - b.order)
}

export async function getWhyTrustSection(): Promise<WhyTrustSection | null> {
  const sections = await fetchFromPayload<WhyTrustSection>('why-trust-section')
  return sections[0] || null
}

export async function getTrustStats(): Promise<TrustStat[]> {
  const stats = await fetchFromPayload<TrustStat>('trust-stats')
  return stats.sort((a, b) => a.order - b.order)
}

export async function getTestimonialsSection(): Promise<TestimonialsSection | null> {
  const sections = await fetchFromPayload<TestimonialsSection>('testimonials-section')
  return sections[0] || null
}