import { Button, PostCardDiv} from "../../styles";
import { Link } from "react-router-dom";


function PostCard ({ title, author, shortText, id, commentsList }) {

    //const commentsNumber = commentsList.length;

    return(
        <>
            <PostCardDiv alignStart gray>
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{shortText}</p>
                <p>Comments: {commentsList}</p>
                <Link to={`/${id}`}><Button primary>Read more</Button></Link>
            </PostCardDiv>
        </>
    )
}

export default PostCard;