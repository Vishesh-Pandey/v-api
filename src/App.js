import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState("");

  const sendRequest = async () => {
    setResponse("Loading...");
    axios({
      method: method,
      url: url,
      data: body ? JSON.parse(body) : undefined,
    })
      .then((response) => {
        setResponse(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        // Handle error
        setResponse("v-api : " + error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendRequest();
    }
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary border border-bottom border-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 mx-2">v-api</span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Vishesh-Pandey/v-api"
            className="btn btn-outline-dark"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="row mt-4">
          <div className="col-2">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="form-select border border-dark"
            >
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
                onKeyDown={handleKeyDown}
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
              <pre
                id="response"
                placeholder="Your API response will appear here"
                style={{ height: "50vh" }}
                className="form-control border border-dark"
              >
                {response}
              </pre>
              <label htmlFor="response">Response</label>
              <button
                onClick={() => navigator.clipboard.writeText(response)}
                className="btn btn-outline-dark position-absolute top-0 end-0 border-0"
              >
                <i className="bi bi-clipboard"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <div className="col">
            <>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Testing localhost api?
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Guide to test localhost api
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <ol>
                        <h6>For Express App</h6>
                        <li>
                          <h6>Install CORS npm package</h6>
                          <pre>npm i cors</pre>
                        </li>
                        <li>
                          <h6>
                            Paste following code after line [app = express() ]
                          </h6>
                          <pre>
                            const cors = require("cors");
                            <br />
                            app.use(cors());
                          </pre>
                          <pre></pre>
                        </li>
                      </ol>
                      <p className="">
                        Cross-Origin Resource Sharing (CORS) is a browser
                        security feature that allows client web applications to
                        interact with resources in a different domain. CORS is
                        an HTTP-header-based protocol that allows a server to
                        specify which origins can access its resources.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <a
                        type="button"
                        className="btn btn-secondary"
                        href="https://github.com/Vishesh-Pandey/v-api/issues"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Report Issue
                      </a>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
