import axios from 'axios'

export const executeMethod = async (method, url, params)=>{
  try{
    const result = await axios({method,
      url,
      params,
      headers: {}
    })
    return result.data
  } catch(e) {
    console.log(e)
    throw e
  }
}


