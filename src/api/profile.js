import request from './client'

export const createProfile = (profile) => {
  return request('/profiles', 'POST', profile)
}
