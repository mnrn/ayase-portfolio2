export interface Skill {
  name: string
  svg: string[]
  lv: number
  descript: string
}

export interface SkillSubtree {
  texts: string[]
  skills: Skill[]
}
