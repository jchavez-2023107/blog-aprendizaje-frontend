import { useState, useEffect } from 'react';
import {
  getCommentsRequest,
  createCommentRequest,
} from '../../services/api.js';

export const useComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carga todos los comentarios
  const loadAll = async () => {
    setLoading(true);
    const res = await getCommentsRequest(postId);
    if (!res.error) setComments(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadAll();
  }, [postId]);

  // Crea un nuevo comentario
  const createComment = async (data) => {
    const res = await createCommentRequest(postId, data);
    if (!res.error) {
      await loadAll(); // Recarga todos los comentarios
    }
  };

  return {
    comments,      // Todos los comentarios sin paginación porque sino no tengo acceso a los anteriores.
    loading,
    createComment,
  };
};
