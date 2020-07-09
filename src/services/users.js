const URL = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"

export async function getUsers() {
  const response = await fetch(URL)
  const users = await response.json()
  return users
}

export async function getUser(id) {
  const response = await fetch(`${URL}/${id}`)
  const user = await response.json()
  return user
}

export async function getPostsByUser(id) {
  const response = await fetch(`${URL}/${id}/posts`)
  const posts = await response.json()
  return posts
}
