interface Country {
  name: string
  code: string
}

interface RestCountriesResponse {
  name: {
    common: string
  }
  cca2: string
}

export async function getCountries(): Promise<Country[]> {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/subregion/South%20America?fields=name,cca2',
    )
    const data = await response.json()
    const countries = data
      .map((country: RestCountriesResponse) => ({
        name: country.name.common,
        code: country.cca2,
      }))
      .sort((a: { name: string }, b: { name: string }) =>
        a.name.localeCompare(b.name),
      )
    return countries
  } catch (error) {
    console.error(`Couldn't fetch countries: ${error}`)
    return []
  }
}
