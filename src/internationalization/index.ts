import fs from 'fs'
import { join } from 'path'

const languagesDirectory = join(process.cwd(), '_lang')

export function getLanguageCodes(): string[] {
  return fs.readdirSync(languagesDirectory)
}

export function getLanguageByCode(code: string): any {
  const fullPath = join(languagesDirectory, `${code}/lang.json`)
  const translations = JSON.parse(fs.readFileSync(fullPath, 'utf8'))[code]
  return translations
}
