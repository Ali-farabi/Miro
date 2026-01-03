export interface HeroData {
  title: string
  subtitle: string
  buttonText: string
  imageUrl: string
}

export interface AboutData {
  title: string
  description: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface ServicesData {
  title: string
  items: ServiceItem[]
}
