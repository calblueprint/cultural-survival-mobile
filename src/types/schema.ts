<<<<<<< HEAD
import { Timestamp } from "firebase/firestore";
=======
// import { Timestamp } from "firebase/firestore";
>>>>>>> 6874891d30a2d26245381d71d799181ae63eaff3

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

<<<<<<< HEAD
export type Grant = {
    grant_id: string;
    category: string;
    countries: string[];
    deadline: Timestamp;
    description: string;
    subject: string;
    title: string;
}
=======
// export type Grant = {
//     grant_id: string;
//     category: string;
//     countries: string[];
//     deadline: Timestamp;
//     description: string;
//     subject: string;
//     title: string;
// }
>>>>>>> 6874891d30a2d26245381d71d799181ae63eaff3
