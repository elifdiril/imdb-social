import LikeLogo from '../assets/images/arrow-alt-down-1.png';
import DislikeLogo from '../assets/images/arrow-alt-down@2x.png';
import ReplyLogo from '../assets/images/reply.png';
import MoreLogo from '../assets/images/more.png';
import '../../src/App.scss';
import users from '../assets/users';

const Details = (props) => {
    return (
        <>
            {props && props.post &&
                <div key={props.post.id}><div className="card">
                    <div className="container"></div>
                    <img src={MoreLogo} alt="more" className="more-details" />
                    <img src={users[1].pp} alt="pp" className="details-pp" />
                    <div className="details-username">{users[1].username} </div>
                    <div>{props.post.content}</div>
                    <br />
                    <div className="row">
                        <div className="column-35"><img alt="reply" src={ReplyLogo} className="comment" />
                        </div>
                        <div className="column-35"><img alt="dislike" src={DislikeLogo} className="dislike-details" />
                            {props.post.dislike_count}</div>
                        <div className="column-30"><img alt="like" src={LikeLogo} className="like-details" />
                            {props.post.like_count}</div>

                    </div>
                </div>
                </div>
            }
        </>
    );
}

export default Details;