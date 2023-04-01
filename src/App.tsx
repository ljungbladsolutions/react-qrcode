import QRCode from 'qrcode'
import {useState} from "react";

function App() {

    const [url, setUrl] = useState('')
    const [qrCode, setQrCode] = useState('')

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, (err: any, url: any) => {
            if (err) return console.error(err)

            console.log(url)
            setQrCode(url)
        })
    }

    return (
        <div className="app">
            <h1>QR Code Generator</h1>
            <input
                type="text"
                placeholder="e.g. https://google.com"
                value={url}
                onChange={(evt) => setUrl(evt.target.value)}
            />
            <button onClick={GenerateQRCode}>Generate</button>
            {qrCode && <>
                <img src={qrCode}/>
                <a href={qrCode} download="qrcode.png">Download</a>
            </>
            }
        </div>
    )
}

export default App
