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
  gcsLink: string;
};

export type Grant = {
  grant_id: string;
  amount: number;
  countries: string[];
  deadline: Date;
  description: string;
  duration: string;
  title: string;
};
