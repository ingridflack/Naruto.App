export interface Village {
  name: string;
  _id: string;
}

export interface Character {
  _id: string;
  name: string;
  avatarSrc: string;
  description: string;
  firstAnimeAppearance: string;
  firstMangaAppearance: string;
  nameMeaning: string;
  notableFeatures: string;
  rank: string;
  village: string;
  age: string;
}
