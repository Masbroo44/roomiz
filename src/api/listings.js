import request from './client'

export const getListings = () => {
  return request('/listings')
}

export const getListing = (id) => {
  return request(`/listings/${id}`)
}

export const knock = (listingId) => {
  return request('/knocks', 'POST', { listingId })
}
