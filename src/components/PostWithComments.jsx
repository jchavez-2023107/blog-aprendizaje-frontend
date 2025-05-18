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
    <div className="post-card flex flex-col md:flex-row">
      <div className="md:w-2/3">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__date">{post.createdAt}</p>
        <p className="post-card__content">{post.content}</p>
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
      </div>

      <div className="md:w-1/3 md:pl-6 mt-6 md:mt-0">
        {loading ? (
          <p>Cargando comentarios…</p>
        ) : (
          <div className="space-y-4">
            {comments.map(c => (
              <div key={c._id} className="p-3 border rounded">
                <p className="font-semibold">
                  {c.name} <span className="text-sm text-gray-500">({c.createdAt})</span>
                </p>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          <input
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Tu comentario"
            value={form.text}
            onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
            className="w-full border p-2 rounded"
            required
          />
          <button type="submit" className="post-card__comments-button">
            Enviar comentario
          </button>
        </form>
      </div>
    </div>
  );
}