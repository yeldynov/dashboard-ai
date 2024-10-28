type PhotoDetails = {
  uploaded: string
  captured: string
  location: string
  aestheticRating: number
  deviceType: string
  taggedPeople: string[]
  objectLabels: string[]
  leadingAttributes: string[]
  leadingPatternsAttributes: string[]
}

type PhotoData = {
  imageLink: string
  details: PhotoDetails
}

export interface AlbumData {
  id: number
  title: string
  totalImages: number
  previewImages: string[]
}
