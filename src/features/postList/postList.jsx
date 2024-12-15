//libraries

import PostCard from "../../components/postCard/postCard";
import { PostsListDiv } from "../../styles";
import { postData } from "../../templatesData";

function PostList () {

    const posts = postData;
    
    return (
        <PostsListDiv>
            {
                posts.map((post)=> (

                    <PostCard 
                        title={post.title}
                        author={post.author}
                        shortText={post.shortText}
                        key={post.id}
                        id={post.id}
                        commentsList={post.comments}
                    />
                ))
            }    
        </PostsListDiv>
    )
}

export default PostList;