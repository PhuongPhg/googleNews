export interface News {
  id?: string;
  title?: string;
  url?: string;
  description?: string;
  body?: string;
  snippet?: string;
  keywords?: string;
  language?: string;
  isSafe?: boolean;
  datePublished?: string;
  provider?: Provider;
  image?: ImageNews
}
export interface Provider {
  name?: string;
  favIcon?: string;
  favIconBase64Encoding?: string;
}
export interface ImageNews {
  url?: string;
    height?: number;
    width?: number;
    thumbnail?: number;
    thumbnailHeight?: number;
    thumbnailWidth?: number;
    base64Encoding?: number;
    name?: string;
    title?: string;
    provider?: Provider;
    imageWebSearchUrl?: string;
    webpageUrl?: string;
}

export interface NewsResponse {
  didUMean?: string;
  totalCount?: number;
  relatedSearch?: any[];
  value?: News[];
}