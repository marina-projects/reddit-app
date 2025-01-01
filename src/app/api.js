const BASE_URL = 'https://www.reddit.com';

export const fetchPosts = async (subreddit = 'reactjs') => {
  try {
    const response = await fetch(`${BASE_URL}/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    const json = await response.json();
    // Возвращаем массив постов
    return json.data.children.map((child) => child.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
