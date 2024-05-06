import json from '../json.json'
export default function Home() {
  return <p>{JSON.stringify(json)}</p>
}
