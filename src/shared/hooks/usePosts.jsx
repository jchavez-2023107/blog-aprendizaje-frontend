import { useState, useEffect } from 'react';
import { getPostsRequest } from '../../services/api.js';

export const usePosts = (course) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await getPostsRequest(course);
    if (res.error) {
      console.error(res.err);
    } else {
      setPosts(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [course]);

  return { posts, loading, refresh: fetchPosts };
};
