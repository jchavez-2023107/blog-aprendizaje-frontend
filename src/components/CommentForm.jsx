import React, { useState } from 'react';

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handle = e => {
    e.preventDefault();
    onSubmit({ name, text });
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handle} className="mt-4 space-y-2">
      <input
        className="w-full border p-2 rounded"
        placeholder="Tu nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Tu comentario"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Enviar
      </button>
    </form>
  );
}
