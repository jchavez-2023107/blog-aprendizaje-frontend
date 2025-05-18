import React from 'react';

export default function CommentSection({ comments }) {
  return (
    <div className="mt-4 space-y-2">
      {comments.map(c => (
        <div key={c._id} className="p-3 bg-gray-100 rounded">
          <p className="font-medium">{c.name} <span className="text-xs text-gray-500">({c.createdAt})</span></p>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
}
