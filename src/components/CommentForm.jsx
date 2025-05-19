import React, { useState } from 'react';

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handle = (e) => {
    e.preventDefault();
    onSubmit({ name, text });
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handle} className="post-card__form">
      <input
        type="text"
        className="post-card__input"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        className="post-card__textarea"
        placeholder="Tu comentario"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit" className="post-card__submit">
        Enviar comentario
      </button>
    </form>
  );
}
