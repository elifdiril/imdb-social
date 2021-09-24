import LikeLogo from '../assets/images/arrow-alt-down-1.png';
import DislikeLogo from '../assets/images/arrow-alt-down@2x.png';
import ReplyLogo from '../assets/images/reply.png';
import MoreLogo from '../assets/images/more.png';

const Details = (props) => {
    return (
        <>
            {props && props.post && 
                    <div key={props.post.id}><div className="card">
                        <div className="container"></div>
                        <img src={MoreLogo} />
                        <div>{props.post.content}</div>
                        <img src={ReplyLogo} />
                        <img src={DislikeLogo} />
                        <img src={LikeLogo} />
                    </div>
                    </div>
            }
        </>
    );
}

export default Details;