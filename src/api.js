getData () {
    xhr({
      url: 'http://api.football-data.org/v1/competitions/426',
      json: true,
      headers: { 'X-Auth-Token': '6361b22678c9489a837087e19ae65447' }
    }, (err, req, body) => {
      console.log(body)
    })
  }