import * as React from "react"

import "../styles/main.scss"

// Components
import QuickInfo from "./components/quick-info/QuickInfo"
import Menu from "./components/menu/Menu"

const IndexPage = () => {
  return (
    <div className="home">
      <header className="home__header">
        <QuickInfo/>
        <Menu />
      </header>
      <section className="home__section">
        <nav>
              <ul>
                  <li>
                      Galeria
                  </li>
                  <li>
                      Oferta
                  </li>
              </ul>
          </nav>
      </section>
      <footer className="home__footer">

      </footer>
    </div>
  )
}

export default IndexPage
