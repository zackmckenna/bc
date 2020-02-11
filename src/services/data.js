import axios from 'axios'
const baseUrl = 'https://guarded-ridge-39330.herokuapp.com/api/strava'

const getStrava = async () => {
  try{
    const response = await axios.get(baseUrl)
    return response.data
  } catch (exception){
    return exception
  }
}

export default { getStrava }
