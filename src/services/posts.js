const URL = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"

export async function getPosts(id) {
  fetch(`${URL}/${id}/posts`)
    .then(res => res.json())
    .then(data => data)
}

export async function getPost(id) {
  const response = await fetch(`${URL}/${id}`)
  const post = await response.json()
  return post
}

export async function getStories(id) {
  const response = await fetch(`${URL}/${id}`)
  const post = await response.json()
  return post
}

