import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // apunta a http://localhost:5000/api
  timeout: 3000
});

export const getPostsRequest = async (course) => {
  try {
    return await apiClient.get(`/posts${course ? `?course=${course}` : ""}`);
  } catch (err) {
    return { error: true, err };
  }
};

export const getCommentsRequest = async (postId) => {
  try {
    return await apiClient.get(`/comments?postId=${postId}`);
  } catch (err) {
    return { error: true, err };
  }
};

export const createCommentRequest = async (postId, data) => {
  try {
    return await apiClient.post("/comments", { postId, ...data });
  } catch (err) {
    return { error: true, err };
  }
};
