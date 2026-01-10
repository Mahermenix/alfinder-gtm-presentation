import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const contentPath = path.join(process.cwd(), 'app', 'data', 'content.json')
    const fileContent = fs.readFileSync(contentPath, 'utf-8')
    const data = JSON.parse(fileContent)

    // Extract stories with their content for search indexing
    const stories = data.gtm?.map((story: any) => ({
      slug: story.slug,
      title: story.title,
      content: story.content,
    })) || []

    return NextResponse.json({ stories })
  } catch (error) {
    console.error('Error loading search content:', error)
    return NextResponse.json(
      { error: 'Failed to load search content', stories: [] },
      { status: 500 }
    )
  }
}
