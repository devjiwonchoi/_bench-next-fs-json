export default async function Home() {
  const json = await import('../json.json')
  return <p>{JSON.stringify(json)}</p>
}
