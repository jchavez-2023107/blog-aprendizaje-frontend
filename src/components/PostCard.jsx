import React from 'react';

export default function PostCard({ post, onLoadComments }) {
  return (
    <div className="p-4 border rounded mb-6 bg-white shadow-md">
      <h3 className="text-lg font-bold text-indigo-800">{post.title}</h3>
      <p className="text-sm text-gray-600">Fecha de creación: {post.createdAt}</p>
      <p className="mt-2 text-gray-800">{post.content}</p>

      {/* Links del repositorio */}
      {post.link?.length > 0 && (
        <div className="mt-2 space-y-1">
          {post.link.map((url, idx) => {
            const label = url.toLowerCase().includes('frontend')
              ? 'Frontend Repo'
              : url.toLowerCase().includes('backend')
              ? 'Backend Repo'
              : 'Repositorio';
            return (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener"
                className="text-indigo-600 block hover:underline"
              >
                {label}
              </a>
            );
          })}
        </div>
      )}

      <button
        onClick={() => onLoadComments(post._id)}
        className="mt-3 text-sm font-semibold text-blue-700 hover:underline"
      >
        Cargar comentarios
      </button>
    </div>
  );
}
