import "./App.css";

function App() {
  return (
    <main>
      <header className="header-container">
        <div className="interface">
          <div class="texto-logo">
            <span class="texto-logo-icone">Wine Pair</span>
          </div>

          <nav class="menu-desktop">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">QUEM SOMOS</a>
              </li>
              <li>
                <a href="#">CONTATO</a>
              </li>
              <li>
                <a href="#">LOJA</a>
              </li>
            </ul>
          </nav>

          <div class="btn-carrinho">
            <a href="#">
              <button><i class="fa-solid fa-bag-shopping"></i></button>
            </a>
          </div>
        </div>
      </header>
    </main>
  );
}

export default App;
