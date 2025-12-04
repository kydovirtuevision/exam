import mock from '../data/mockIntegrations'

// Simple mock service to simulate async fetching and allow later swapping with a real API.
export function getIntegrations(){
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mock]), 200)
  })
}

export default { getIntegrations }
