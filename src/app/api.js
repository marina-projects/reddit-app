const BASE_URL = 'https://www.reddit.com';

//эта функция делает запрос к API реддита, аргумент означает сабреддит, который используется по умолчанию
export const fetchPosts = async (subreddit = 'programming') => {
  try {
    //получаем response - он получается, если сработал запрос (статус 200-299)
    const response = await fetch(`${BASE_URL}/r/${subreddit}.json?limit=50`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`); // если запрос завершился ошибкой, показываем статус запроса
    }
    // забираем из ответа json - метод .json преобразует json в объект JS
    const json = await response.json();
    // Возвращаем массив постов - извлекаем из объекта свойства data -> children и применяем к ним метрод .map, чтобы получить данные каждого поста
    return json.data.children.map((child) => child.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};


export const fetchComments = async (subreddit, postId) => {
  try {
    const response = await fetch(`${BASE_URL}/r/${subreddit}/comments/${postId}.json?sort=new&limit=50&depth=3`);
    if (!response.ok) {
      throw new Error(`Failed to fetch comments: ${response.status}`);
    }
    const json = await response.json();
    console.log('Comments json:', json);
    
    // Извлекаем массив комментариев
    return json[1].data.children.map((child) => child.data);
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};




/*
Функция 
export const fetchPosts = async (...) => {
    try {
        const responce = await fetch(...);
        ...
    } catch (error) {
        throw error; 
    }
}
используется для асинхронного "захвата" данных API.
Ошибка здесь происходит, если по какой-то причине сам запрос не произошел - оборвалась сеть, или response.json не может быть обработан.
А ошибка внутри try - это уже если запрос произошел, но с неуспешным статусом.

async ... await означает асинхронный запрос.
*/