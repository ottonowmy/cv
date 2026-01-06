import { PersonalDetails, Experience, Education, Skill, Hobby, Language } from "./type";

// ====== Personal Details ======
export const personalDetailsPreset: PersonalDetails = {
  fullname: "Valet de pique",
  email: "valetdepique@example.com",
  phone: "+123456789",
  address: "123, Allée des Cartes Truquées, 75000 Pique-sur-Ombre, France",
  photoUrl: "https://example.com/photo.jpg",
  description: `
  Je ne suis pas un simple valet, je suis la carte
que l’on tire quand on désespère, celle qui change
la donne sans prévenir, sans pitié, sans regret.
On dit que je porte malheur, mais je porte surtout
la vérité crue : le jeu est truqué depuis toujours.
J’en connais les règles mieux que quiconque, j’en
maîtrise les failles, les pièges et les échappatoires.
Spécialiste des coups bas, des silences lourds de sens,
des victoires en demi-teinte et des défaites calculées.
Je ne joue pas, je gagne avant même que la partie
ne commence vraiment.
`,
  postSeeking: "Stage de Valet professionnel"
};

// ====== Experiences ======
export const experiencesPreset: Experience[] = [
  {
    id: "1",
    jobTitle: "Valet",
    companyName: "Royaume de Pique",
    startDate: "2020-01",
    endDate: "2024-12",
    description: "Service fidèle au roi et à la reine, gestion des cartes et missions spéciales."
  },

  {
    id: "1",
    jobTitle: "Stage au château des Trèfles",
    companyName: "Royaume de Trèfles",
    startDate: "2022-11",
    endDate: "2022-12",
    description: "Service loyal à la couronne, gestion stratégique des cartes et réalisation de missions confidentielles."
  },
];

// ====== Education ======
export const educationsPreset: Education[] = [
  {
  id: "1",
  school: "Académie des Cartes",
  degree: "Diplôme de stratégie",
  description: "Apprentissage des jeux et tactiques pour servir dans les royaumes.",
  startDate: "2016-09",
  endDate: "2019-06"
}];

// ====== Skills ======
export const skillsPreset: Skill[] = [{
  id: "1",
  name: "Stratégie et planification"
}];

// ====== Hobbies ======
export const hobbiesPreset: Hobby[] = [{
  id: "1",
  name: "Jeux de cartes"
}];

// ====== Languages ======
export const languagesPreset: Language[] = [{
  id: "1",
  language: "Français",
  proficiency: "Avancé"
}];
