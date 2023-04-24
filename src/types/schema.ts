import { Timestamp } from 'firebase/firestore';

export type User = {
  user_id: string;
  admin: boolean;
  audio: string[];
  email: string;
  grants: string[];
  language: string;
};

export type Audio = {
  audio_id: string;
  country: string;
  description: string;
  duration: number;
  format: string;
  gcsLink: string;
  indigenousLanguage: string[];
  language: string[];
  mp3filename: string;
  publishedAt: Timestamp;
  theme: string[];
  thumbnail: string;
  title: string;
  xmlSoundCloud: string;
};

export type Grant = {
  grant_id: string;
  amount: number;
  countries: string[];
  deadline: string;
  description: string;
  duration: string;
  image_link: string;
  share_link: string;
  title: string;
};
