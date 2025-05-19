import React from 'react';

export default function CommentSection({ comments }) {
  return (
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
  );
}
