import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const GTM_STORIES_PATH = path.join(process.cwd(), '..', '_bmad-output', 'GTM', 'Stories')
const RESEARCH_PATH = path.join(process.cwd(), '..', '_bmad-output', 'planning-artifacts')

export interface StoryMetadata {
  title: string
  slug: string
  status?: string
  date?: string
  description?: string
}

export interface StoryContent {
  metadata: StoryMetadata
  content: string
}

export function getGTMStories(): StoryMetadata[] {
  const files = fs.readdirSync(GTM_STORIES_PATH)
  const stories = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(GTM_STORIES_PATH, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)

      return {
        title: data.title || file.replace(/\.md$/, '').replace(/-/g, ' '),
        slug: file.replace(/\.md$/, ''),
        status: data.status,
        date: data.date,
        description: data.description,
      }
    })
    .sort((a, b) => a.slug.localeCompare(b.slug))

  return stories
}

export function getGTMStoryBySlug(slug: string): StoryContent | null {
  try {
    const filePath = path.join(GTM_STORIES_PATH, `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      metadata: {
        title: data.title || slug.replace(/-/g, ' '),
        slug,
        status: data.status,
        date: data.date,
        description: data.description,
      },
      content,
    }
  } catch (error) {
    console.error(`Error reading story ${slug}:`, error)
    return null
  }
}

export function getResearchFiles(): { category: string; files: StoryMetadata[] }[] {
  const categories = ['market-research', 'allaboutalfinder', 'competitors', 'partnerships']

  return categories
    .map(category => {
      const categoryPath = path.join(RESEARCH_PATH, category)
      if (!fs.existsSync(categoryPath)) return null

      const files = fs.readdirSync(categoryPath)
      const researchFiles = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
          const filePath = path.join(categoryPath, file)
          const fileContent = fs.readFileSync(filePath, 'utf-8')
          const { data } = matter(fileContent)

          return {
            title: data.title || file.replace(/\.md$/, '').replace(/-/g, ' '),
            slug: `${category}/${file.replace(/\.md$/, '')}`,
            status: data.status,
            date: data.date,
            description: data.description,
          }
        })
        .sort((a, b) => a.slug.localeCompare(b.slug))

      return {
        category,
        files: researchFiles,
      }
    })
    .filter(Boolean) as { category: string; files: StoryMetadata[] }[]
}

export function getKeyFacts(): Record<string, any> {
  try {
    const filePath = path.join(RESEARCH_PATH, '00-KEY-FACTS.md')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      metrics: data.metrics || {},
      socialMedia: data.socialMedia || {},
      pricing: data.pricing || {},
      company: data.company || {},
    }
  } catch (error) {
    console.error('Error reading key facts:', error)
    return {}
  }
}
