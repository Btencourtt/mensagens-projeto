import { useState } from 'react';

export default function FormularioMensagem({ onMensagemEnviada }: { onMensagemEnviada: () => void }) {
  const [texto, setTexto] = useState('');

  const enviarMensagem = async () => {
    if (texto.trim() === '') return;

    await fetch('http://localhost:5000/mensagens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texto })
    });

    setTexto('');
    onMensagemEnviada();
  };

  return (
    <div className="formulario-mensagem">
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button onClick={enviarMensagem}>Enviar</button>
    </div>
  );
}