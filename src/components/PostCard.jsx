import React from 'react';

export default function PostCard({ post, onLoadComments }) {
  return (
    <div className="p-4 border rounded mb-6">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p className="text-sm text-gray-500">{post.createdAt}</p>
      <p className="mt-2">{post.content}</p>

      {/* Si existe el array de enlaces, lo recorremos */}
      {post.link?.length > 0 && (
        <div className="mt-2 space-y-1">
          {post.link.map((url, idx) => {
            // Ponemos una etiqueta más amigable según si es backend o frontend
            const label = url.toLowerCase().includes('frontend')
              ? 'Frontend Repo'
              : url.toLowerCase().includes('backend')
              ? 'Backend Repo'
              : `Repositorio`;
            return (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener"
                className="text-blue-600 block hover:underline"
              >
                {label}
              </a>
            );
          })}
        </div>
      )}

      <button
        onClick={() => onLoadComments(post._id)}
        className="mt-3 text-indigo-600"
      >
        Cargar comentarios
      </button>
    </div>
  );
}
