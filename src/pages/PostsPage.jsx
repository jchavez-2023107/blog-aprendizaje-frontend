import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../shared/hooks/usePosts.jsx';
import PostWithComments from '../components/PostWithComments.jsx';
import '../index.css';

export default function PostsPage() {
  const { course } = useParams();
  const { posts, loading } = usePosts(course);

  if (loading) return <p className="text-center text-xl text-gray-600 mt-10">Cargando posts...</p>;

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
      <h1 className="home-title">Curso: {course}</h1>

      <div className="space-y-10">
        {posts.map(post => (
          <PostWithComments key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
