import LikeLogo from '../assets/images/arrow-alt-down-1.png';
import DislikeLogo from '../assets/images/arrow-alt-down@2x.png';
import CommentLogo from '../assets/images/comment-alt-dots@2x.png';
import MoreLogo from '../assets/images/more.png';
import '../../src/App.scss';

const Topics = (props) => {

    const handleClick = id => {
        if(props.getPostWithId){
            props.getPostWithId(id);
        }
    }
    return (
        <>
            {props && props.posts && props.posts.map(
                (item) =>
                    <div key={item.id}><div className="card">
                        <div className="container">
                            <img alt="more" src={MoreLogo} className="more" />
                            <div onClick={() =>{handleClick(item.id)}} >{item.title}</div>
                            <br/>
                            <div className="row">
                                <div className="column-35"><img alt="dislike" src={DislikeLogo} className="dislike" />
                                    {item.dislike_count}</div>
                                <div className="column-35"><img alt="like" src={LikeLogo} className="like" />
                                    {item.like_count}</div>
                                <div className="column-30"><img alt="comment" src={CommentLogo} className="comment" />
                                    {item.comment_count}</div>
                            </div>
                        </div>
                    </div>
                    </div>
            )}
        </>
    );
}

export default Topics;