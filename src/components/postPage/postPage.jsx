//libraries
import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectComments, loadCommentsFromAPI, selectCommentsStatus } from "../../features/postList/postListSlice";

//styles
import { Button, PostPageDiv, Div } from "../../styles";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

function PostPage () {

    const {postId} = useParams();
    const dispatch = useDispatch();

    const posts = useSelector(selectPosts);
    const status = useSelector(selectCommentsStatus);
    const comments = useSelector((state) => selectComments(state, postId));

    const post = posts.find((p) => p.id === postId);

    useEffect(() => {
        if (post) {
            dispatch(loadCommentsFromAPI({ subreddit: "programming", postId }));
        }
    }, [dispatch, post, postId]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!post) {
        return <p>Post not found</p>;
    }
    
    return (
        <PostPageDiv column alignStart gray mobileAlignStart>
            <NavLink to='/'><ArrowBackIosNewOutlinedIcon /><Button>Back to posts</Button></NavLink>
            <h2><a href={`https://www.reddit.com/${post.permalink}`} target="_blank">{post.title}</a></h2>
            <p>{post.author}</p>
            <Div row justifyStart gray gap='10px' mobileJustifyStart>
                    <ThumbUpAltOutlinedIcon /><p>{post.ups}</p><p>|</p><ThumbDownOutlinedIcon /><p>{post.downs}</p>
                </Div>
            <p>{post.selftext}</p>
            <p>Comments: {post.num_comments}</p>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id}>
                        <p><strong>{comment.author}:</strong> {comment.body}</p>
                    </div>
                ))
            )
               : (
                    <p>No comments yet.</p>
               )
            }
            
        </PostPageDiv> 
    )
};

export default PostPage;