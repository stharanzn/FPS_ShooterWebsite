import React, {useState, useEffect} from 'react'
import "./Download.scss"

export default function Download() {
  const [downloadLink, setDownloadLink] = useState(null);

  const git_api = "https://api.github.com/repos/stharanzn/FPS_ShooterLauncher/releases/latest"

  var json = null;

  useEffect(()=>{
    fetch(git_api).then(response => response.json()).then(data => {       
       var downlaodURL = data["assets"][0]["browser_download_url"]
       console.log(downlaodURL)
       setDownloadLink(downlaodURL)       
      }).catch(e => {
      console.log(e)
  })
  }, [])
  


  return (
    <>
        <div className="downloadPage ">
            <a href={downloadLink} className='custom-btn btn-8'>Download</a>
        </div>
    </>
  )
}
