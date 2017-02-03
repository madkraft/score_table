export const nextGames = (fixtures, matchday) => {
  return fixtures.filter(fixture => (
    fixture.matchday === matchday
  ))
}
