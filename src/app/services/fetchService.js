const baseUrl = 'http://api.football-data.org/v1/competitions/426/'

export const loadEngland = (topic) => {
  return fetch(`${baseUrl}${topic}`, {
    headers: {
      'X-Auth-Token': '6361b22678c9489a837087e19ae65447'
    }
  }).then(res => res.json())
}
