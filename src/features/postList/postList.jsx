// Libraries
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import PostCard from "../../components/postCard/postCard";

// Styles
import { PostsListDiv } from "../../styles";

// Redux
import { loadPostsFromAPI, selectPosts, selectError, selectPostsStatus } from "./postListSlice";


function PostList() {
  const posts = useSelector(selectPosts); // Получаем данные из Store
  console.log(posts);
  const status = useSelector(selectPostsStatus);
  const error = useSelector(selectError);
  
  const dispatch = useDispatch();

  // Загружаем данные при монтировании
  useEffect(() => {
    dispatch(loadPostsFromAPI('programming'));
  }, [dispatch]);

  if(status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>
  }

  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <PostsListDiv>
      {posts.map((post) => (
        <PostCard
          title={post.title}
          author={post.author}
          shortText={post.selftext}
          upVotes={post.ups}
          downVotes={post.downs}
          key={post.id}
          id={post.id}
          commentsList={post.num_comments}
        />
      ))}
    </PostsListDiv>
  );
}

export default PostList;
