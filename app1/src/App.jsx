import { useState } from "react";

function App(){

  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  return (
    <>
      <h1>Aula 01 ReactJS</h1>

      <div>
        <input type="text" placeholder="nome" value={nome} onChange={ (e) =>  setNome(e.target.value)} />
        <input type="text" value={sobreNome} onChange={ (e) =>  setSobreNome(e.target.value)} />
        <p>{nome} {sobreNome}</p>
      </div>
    </>
  )
}
export default App;