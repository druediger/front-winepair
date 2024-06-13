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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Quem Somos</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Loja</a>
              </li>
            </ul>
          </nav>

          <div class="btn-carrinho">
            <a href="#">
              <button>Carrinho</button>
            </a>
          </div>
        </div>
      </header>
    </main>
  );
}

export default App;
