import './App.css';
import { useState } from 'react';

function App() {

  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("")
  const [body, setBody] = useState("")
  const [response, setResponse] = useState("")

  const sendRequest = async () => {
    setResponse("Loading...")
    try {
      const res = await fetch(url, {
        method,
        body: body ? JSON.parse(body) : undefined

      })
      const data = await res.json()
      console.log(data)
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      console.log(error)
      setResponse("Unable to fetch data. Error: " + error)
    }
  }


  return (
    <>
      <nav className="navbar bg-body-tertiary border border-bottom border-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 mx-2">v-api</span>
          <a target='_blank' rel="noreferrer" href="https://github.com/Vishesh-Pandey/v-api" className="btn btn-outline-dark"><i className="bi bi-github"></i></a>
        </div>
      </nav>

      <div className="container">

        <div className="row mt-4">

          <div className="col-2">
            <select value={method} onChange={(e) => setMethod(e.target.value)} className="form-select border border-dark" >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>

          <div className="col-10">
            <div className="input-group mb-3">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                className="form-control border border-dark"
                placeholder="Enter URL"

              />
              <button
                onClick={sendRequest}
                className="btn btn-outline-dark"
                type="button"
                id="button-addon2"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <div className="col">
            <div className="form-floating">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="form-control border border-dark"
                id="body"
                style={{ height: 100 }}
              />
              <label htmlFor="body">Body</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-floating">
              <textarea id="response" className='form-control border border-dark' value={response} placeholder='Your API response will appear here' style={{ height: "50vh" }}></textarea>
              <label htmlFor="response">Response</label>
              <button onClick={() => navigator.clipboard.writeText(response)} className="btn btn-outline-dark position-absolute top-0 end-0 border-0"><i className="bi bi-clipboard"></i></button>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
