import viaggi from "./data/data";

function App() {
console.log(viaggi)
  return (
    <>

      <header>
        <nav className="navbar bg-body-tertiary px-4">
          <a className="navbar-brand" href="#">
            <i className="bi bi-airplane-fill pe-2"></i>Viaggi
          </a>
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="row row-cols-3">
            {
              
              viaggi.map(viaggio => (
                <div className="col" key={viaggio.id}>
                  <div className="card">
                    <h1 className="card-title">{viaggio.destinazione}</h1>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
