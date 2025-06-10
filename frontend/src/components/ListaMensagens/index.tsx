import { useEffect, useState } from 'react';

export default function ListaMensagens({ recarregar }: { recarregar: number }) {
  const [mensagens, setMensagens] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/mensagens')
      .then(res => res.json())
      .then(data => setMensagens(data));
  }, [recarregar]);

  return (
    <ul className="lista-mensagens">
      {mensagens.map((mensagem, index) => (
        <li key={index}>{mensagem}</li>
      ))}
    </ul>
  );
}