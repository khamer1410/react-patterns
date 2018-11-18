const CURRENT_USER = 'currentUser'

export function login(username = 'dummy') {
  sessionStorage.removeItem(CURRENT_USER)
  sessionStorage.setItem(CURRENT_USER, username)
}

export function logout() {
  sessionStorage.removeItem(CURRENT_USER)
}

export function getCurrentUser() {
  return sessionStorage.getItem(CURRENT_USER)
}
