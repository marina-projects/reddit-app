//libraries
import { useParams, NavLink } from "react-router-dom";

// import CommentsList from "../../features/commentsList/commentsList";

import { postData } from "../../templatesData";

import { Button, PostPageDiv } from "../../styles";

function PostPage () {

    const {postId} = useParams();
    const post = postData[(postId - 1)];
    const comments = post.comments;
    const commentsNumber = comments.length;
    
    return (
        <PostPageDiv column alignStart gray>
            <NavLink to='/'><Button>Back to posts</Button></NavLink>
            <h2>{post.title}</h2>
            <p>{post.shortText}</p>
            <p>Post text</p>
            <p>Comments - {commentsNumber}</p>
            {
                comments.map((comment) => (
                    <div key={comment.commentId}>
                        <p>{comment.commentText}</p>
                    </div>
                ))
            }
            
        </PostPageDiv> 
    )
};

export default PostPage;