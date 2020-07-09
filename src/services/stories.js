const URL = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories"

export async function getStories() {
  const response = await fetch(URL)
  const stories = await response.json()
  return stories
}