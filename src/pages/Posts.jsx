import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../shared/hooks/usePosts.jsx';
import PostWithComments from '../components/PostWithComments.jsx';
import '../index.css';

export default function Posts() {
  const { course } = useParams();
  const { posts, loading } = usePosts(course);

  if (loading) return <p>Cargando posts...</p>;

  return (
    <div className="p-6">
      <h1 className="home-title">Curso: {course}</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <PostWithComments key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}