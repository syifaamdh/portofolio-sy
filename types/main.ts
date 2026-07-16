import Achievements from "@/components/achievements/Achievements";
type skill = {
    name: string,
    image: string,
    category: string
}

type project = {
    name: string,
    slug: string;
    image: string,
    techstack: string,
    category: string,
    links: {
        visit: string,
        code: string,
        video: string
    }
}

type experience = {
    company: string,
    position: string,
    startDate: string,
    endDate: string,
    desc: string[]
}

type education = {
    institute: string,
    degree: string,
    startDate: string,
    endDate: string,
}

type main = {
    name: string,
    titles: string[],
    heroImage: string,
    shortDesc: string,
    techStackImages: string[],
}

type about = {
    aboutImage: string,
    aboutImageCaption: string,
    title: string,
    about: string,
    resumeUrl: string,
    callUrl: string
}

type social = {
    name: string,
    icon: string,
    link: string
}

type data = {
    main: main,
    about: about,
    skills: skill[],
    projects: project[],
    experiences: experience[],
    educations: education[],
    achievements: Achievement[],
    socials: social[]
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
}

export type {
  data,
  main,
  about,
  skill,
  project,
  experience,
  education,
  social,
};