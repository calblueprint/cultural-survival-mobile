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
  audio_file: string;
  authors: string[];
  description: string;
  title: string;
  soundCloud: string;
  theme: string;
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
