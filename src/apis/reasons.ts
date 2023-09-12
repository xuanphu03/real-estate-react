const API_URL = 'https://5d035943d1471e00149bab0a.mockapi.io'

export async function fetchReasons() {
  const res = await fetch(`${API_URL}/reasons`)
  const data = await res.json()
  return data
}
