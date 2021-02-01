import dotenv from 'dotenv'
import unirest from 'unirest'

dotenv.config()

var req = unirest('GET', 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale')

req.query({
  city: 'Los Angeles',
  limit: '200',
  offset: '0',
  state_code: 'CA',
  sort: 'relevance',
})

console.log(process.env.RAPID_API_KEY)

req.headers({
  'x-rapidapi-key': process.env.RAPID_API_KEY,
  'x-rapidapi-host': 'realtor.p.rapidapi.com',
  useQueryString: true,
})

req.end(function (res) {
  try {
    if (res.error) throw new Error(res.error)
    console.log(JSON.stringify(res.body, null, 2))
  } catch (err) {
    console.error(err)
  }
})
