const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api";

// Helper for real API requests
const apiRequest = async (endpoint, options = {}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };
  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  return response.json();
};

// LESSONS
export const getAllLessons = () => apiRequest('/lessons');
export const getAllSkills = () => apiRequest('/lessons'); // Alias for lessons
export const getLessonById = (id) => apiRequest(`/lessons/${id}`);
export const createLesson = (lessonData) => apiRequest('/lessons', {
  method: 'POST',
  body: JSON.stringify(lessonData),
});
export const updateLesson = (id, lessonData) => apiRequest(`/lessons/${id}`, {
  method: 'PUT',
  body: JSON.stringify(lessonData),
});
export const deleteLesson = (id) => apiRequest(`/lessons/${id}`, {
  method: 'DELETE',
});

// TRADES
export const getAllTrades = () => apiRequest('/trades');
export const getTradeById = (id) => apiRequest(`/trades/${id}`);
export const createTrade = (tradeData) => apiRequest('/trades', {
  method: 'POST',
  body: JSON.stringify(tradeData),
});
export const updateTrade = (id, tradeData) => apiRequest(`/trades/${id}`, {
  method: 'PUT',
  body: JSON.stringify(tradeData),
});
export const deleteTrade = (id) => apiRequest(`/trades/${id}`, {
  method: 'DELETE',
});

// COMMENTS
export const getComments = (lessonId) => apiRequest(`/comments/${lessonId}`);
export const addComment = (commentData) => apiRequest('/comments', {
  method: 'POST',
  body: JSON.stringify(commentData),
});

// AUTH
export const login = (credentials) => apiRequest('/auth/login', {
  method: 'POST',
  body: JSON.stringify(credentials),
});
export const register = (userData) => apiRequest('/auth/register', {
  method: 'POST',
  body: JSON.stringify(userData),
});

// (Optional) You can add user/auth endpoints here later.

// Remove or comment out all mock data and mock functions below this line.
