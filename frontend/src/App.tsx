import { useState } from 'react';
import FormularioMensagem from './components/FormularioMensagem';
import ListaMensagens from './components/ListaMensagens';

function App() {
  const [recarregar, setRecarregar] = useState(0);

  const atualizarMensagens = () => {
    setRecarregar(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Mensagens</h1>
      <FormularioMensagem onMensagemEnviada={atualizarMensagens} />
      <ListaMensagens recarregar={recarregar} />
    </div>
  );
}

export default App;