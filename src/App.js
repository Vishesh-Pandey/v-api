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
    }
  }


  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 mx-2">v-api</span>
          <a target='_blank' rel="noreferrer" href="https://github.com/Vishesh-Pandey/v-api" className="btn btn-outline-dark">Code</a>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-2">
            <select value={method} onChange={(e) => setMethod(e.target.value)} className="form-select" >

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
                className="form-control"
                placeholder="Enter URL"

              />
              <button
                onClick={sendRequest}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Send
              </button>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}

              />
              <label htmlFor="floatingTextarea2">Body</label>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating">
              <textarea className='form-control' value={response} style={{ height: "50vh" }}></textarea>
              <label htmlFor="response">Response</label>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
