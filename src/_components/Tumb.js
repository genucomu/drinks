export const Tumb = ({url, alt, width, height})=>{
  return <img style={{width: width ||'180px', height: height||'180px'}} src={url} alt={alt} />
}