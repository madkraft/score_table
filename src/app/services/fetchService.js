const baseUrl = 'http://api.football-data.org/v1/competitions'

export const loadData = (compId, topic) => {
  return fetch(`${baseUrl}/${compId}/${topic}`, {
    headers: {
      'X-Auth-Token': '6361b22678c9489a837087e19ae65447'
    }
  }).then(res => res.json())
}
