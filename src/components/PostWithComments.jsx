import React, { useState } from 'react';
import { useComments } from '../shared/hooks/useComments.jsx';

export default function PostWithComments({ post }) {
  const { comments, loading, createComment } = useComments(post._id);
  const [form, setForm] = useState({ name: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    createComment(form);
    setForm({ name: '', text: '' });
  };

  return (
    <div className="post-card">
      {/* IZQUIERDA */}
      <div className="post-card__left">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__date">Fecha de creación: {post.createdAt}</p>
        <p className="post-card__content">{post.content}</p>

        {/* Links */}
        {post.links?.length > 0 && (
          <div className="post-card__links">
            {post.links.map((url, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener"
                className="post-card__link"
              >
                {url.toLowerCase().includes('frontend')
                  ? 'Frontend Repo'
                  : url.toLowerCase().includes('backend')
                  ? 'Backend Repo'
                  : `Repo ${idx + 1}`}
              </a>
            ))}
          </div>
        )}

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="post-card__form">
          <input
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={(e) =>
              setForm((f) => ({ ...f, name: e.target.value }))
            }
            className="post-card__input"
            required
          />
          <textarea
            placeholder="Tu comentario"
            value={form.text}
            onChange={(e) =>
              setForm((f) => ({ ...f, text: e.target.value }))
            }
            className="post-card__textarea"
            required
          />
          <button type="submit" className="post-card__submit">
            Enviar comentario
          </button>
        </form>
      </div>

      {/* DERECHA */}
      <div className="post-card__right">
        {loading ? (
          <p>Cargando comentarios…</p>
        ) : (
          <div className="post-card__comments">
            {comments.map((c) => (
              <div key={c._id} className="post-card__comment">
                <p className="font-semibold">
                  {c.name}{' '}
                  <span className="text-sm text-gray-500">
                    ({c.createdAt})
                  </span>
                </p>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
