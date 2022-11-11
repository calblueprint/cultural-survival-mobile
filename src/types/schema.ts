// import { Timestamp } from "firebase/firestore";

export type User = {
    user_id: string;
    admin: boolean;
    audio: string[];
    email: string;
    grants: string[];
    language: string;
}

export type Audio = {
    audio_id: string;
    audio_file: string;
    authors: string[];
    description: string;
    title: string;
}

// export type Grant = {
//     grant_id: string;
//     category: string;
//     countries: string[];
//     deadline: Timestamp;
//     description: string;
//     subject: string;
//     title: string;
// }
