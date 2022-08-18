import { useState } from "react"

import QRcode from "react-qr-code"
import QRcodeLink from "qrcode"

import './SCSS/App.scss'

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url: string) {
    QRcodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err: string, url: string) {
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="body">

      <QRcode
        value={link}
      />

      <input
        className='input'
        placeholder='Digite seu link...'
        value={link}
        onChange={(e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>Baixar QrCode</a>

    </div>
  )
}

export default App
