const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'User cant find with this email',
  INVALID_PASSWORD: 'Email or password invalid',
  auth: 'Please Login'
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown Error'
}
