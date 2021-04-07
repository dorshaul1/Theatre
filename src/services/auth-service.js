import { storageService } from './async-storage-service'

const USER_KEY = 'user'

const defUsers = [
  {
    _id: 'u1',
    username: 'hadar',
    password: 'hadar',
  },
  {
    _id: 'u2',
    username: 'dor',
    password: 'dor1',
  },
  {
    _id: 'u3',
    username: 'noa',
    password: 'noa',
  },
]

initUsers()

export const authService = {
  initUsers,
  getUserByUsername,
}

async function initUsers() {
  let users = await storageService.query(USER_KEY)
  if (!users || !users.length) {
    await storageService.postMany(USER_KEY, defUsers)
    users = defUsers
  }
}

async function getUserByUsername(username) {
  const users = await storageService.query(USER_KEY)
  const user = users.find((currUser) => currUser.username === username)
  return user ? user : null
}
