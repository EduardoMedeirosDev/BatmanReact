import logo from './logo.svg';
import './App.css';

function App() {
  const Lista = [
    {nome: 'Edu', aluno: true},
    {nome: 'Andressa', aluno: true},
    {nome: 'Paulo', aluno: false},
    {nome: 'Gabriel', aluno: false},
    {nome: 'Pedro', aluno: true},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div>{Lista.map((aluno) => (
          <>
            <div>{aluno.nome}</div>
            <div>É aluno? 
              <span style={aluno.aluno ? {color: 'green'} : {color: 'red'}}>{aluno.aluno ? 'Sim' : 'Não'}
                </span>
              </div>
          </>
        ))}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='teste'>Teste</div>
      </header>
    </div>
  );
}

export default App;
