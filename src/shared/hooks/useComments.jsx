import { useState, useEffect } from 'react';
import { getCommentsRequest, createCommentRequest } from '../../services/api.js';

export const useComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const res = await getCommentsRequest(postId);
      if (!res.error) setComments(res.data);
      setLoading(false);
    };
    fetchComments();
  }, [postId]);

  const createComment = async (data) => {
    const res = await createCommentRequest(postId, data);
    if (!res.error) {
      const updated = await getCommentsRequest(postId);
      if (!updated.error) setComments(updated.data);
    }
  };

  return { comments, loading, createComment };
};
