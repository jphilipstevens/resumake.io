import { FormValues, Resume, Basics, Work, Education, Skill, Project } from '../types'

function sanitizeBasics(basics?: Basics): Basics | undefined {
  if (!basics) return undefined
  const { name, email, phone, location, profiles, url } = basics
  return {
    name,
    email,
    phone,
    location,
    profiles,
    url
  }
}

function sanitizeWork(work?: Work[]): Work[] | undefined {
  if (!work) return undefined
  return work.map(({ name, position, startDate, endDate, summary, highlights }) => ({
    name,
    position,
    startDate,
    endDate,
    summary,
    highlights
  }))
}

function sanitizeEducation(education?: Education[]): Education[] | undefined {
  if (!education) return undefined
  return education.map(({ institution, area, studyType, startDate, endDate, score }) => ({
    institution,
    area,
    studyType,
    startDate,
    endDate,
    score
  }))
}

function sanitizeSkills(skills?: Skill[]): Skill[] | undefined {
  if (!skills) return undefined
  return skills.map(({ name, level, keywords }) => ({ name, level, keywords }))
}

function sanitizeProjects(projects?: Project[]): Project[] | undefined {
  if (!projects) return undefined
  return projects.map(({ name, description, highlights, keywords, url, startDate, endDate }) => ({
    name,
    description,
    highlights,
    keywords,
    url,
    startDate,
    endDate
  }))
}

export function toJsonResume(values: FormValues): Resume {
  return {
    basics: sanitizeBasics(values.basics),
    work: sanitizeWork(values.work),
    volunteer: values.volunteer,
    education: sanitizeEducation(values.education),
    awards: values.awards,
    publications: values.publications,
    skills: sanitizeSkills(values.skills),
    projects: sanitizeProjects(values.projects)
  }
}
