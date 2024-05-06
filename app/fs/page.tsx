import { readFile } from 'fs/promises'
import { resolve } from 'path'
import matter from 'gray-matter'

export default async function Home() {
  const mdx = await readFile(resolve('public', 'mdx.mdx'), 'utf-8')
  const { data, content } = matter(mdx)
  return <p>{JSON.stringify({ ...data, content })}</p>
}
