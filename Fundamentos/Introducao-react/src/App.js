import './App.css';
import logoti from './img/logo.jpg'


const abrirNoticia = () => {
  alert('Abrindo Notícia')
}

const card = () => {
  return (
    <article className='App-card'>
      <h3>Título da Categoria</h3>
      <img src={logoti}></img>
      <h5>Título da notícia</h5>
      <p>descrição da notícia</p>
      <button onClick={abrirNoticia}>Quero Ler</button>
    </article>
  )
}

function App() {
  return (
    <div>
      <header className='App-header'>
        <h1>LabeNotícias</h1>
      </header>
      <main className='App-main'>
        {card()}
        {card()}
        {card()}
        {card()}
      </main>
      <footer className='App-footer'>
        <p>Copyrigth</p>
      </footer>
    </div>

  )
}

export default App;
