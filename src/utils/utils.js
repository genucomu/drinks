import axios from 'axios'

export const executeMethod = async (method, url)=>{
  const config = {
    method,
    url,
    headers: { }
  };
  
  try{
    const result = await axios(config)
    return result.data
  } catch(e) {
    console.log(e)
    throw e
  }
}


