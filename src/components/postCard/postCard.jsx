import { Button, PostCardDiv} from "../../styles";
import { Link } from "react-router-dom";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { Div } from "../../styles";


function PostCard ({ title, author, shortText, id, commentsList, upVotes, downVotes }) {

    //const commentsNumber = commentsList.length;

    return(
        <>
            <PostCardDiv alignStart gray mobileAlignStart>
                <h3>{title}</h3>
                <p>{author}</p>
                <Div row justifyStart gray gap='10px' mobileJustifyStart>
                    <ThumbUpAltOutlinedIcon /><p>{upVotes}</p><p>|</p><ThumbDownOutlinedIcon /><p>{downVotes}</p>
                </Div>
                
                <p>{shortText}</p>
                <p>Comments: {commentsList}</p>
                <Link to={`/${id}`}><Button primary>Read more</Button></Link>
            </PostCardDiv>
        </>
    )
}

export default PostCard;