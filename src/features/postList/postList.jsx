// Libraries
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import PostCard from "../../components/postCard/postCard";

// Styles
import { PostsListDiv } from "../../styles";

// Redux
import { selectPosts, loadPosts } from "./postListSlice";

function PostList() {
  const posts = useSelector(selectPosts); // Получаем данные из Store
  const dispatch = useDispatch();

  // Загружаем данные при монтировании
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  // Обработка пустого состояния
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <PostsListDiv>
      {posts.map((post) => (
        <PostCard
          title={post.title}
          author={post.author}
          shortText={post.shortText}
          key={post.id}
          id={post.id}
          commentsList={post.comments}
        />
      ))}
    </PostsListDiv>
  );
}

export default PostList;
