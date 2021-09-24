import pp1 from '../assets/images/pp1.png';
import pp2 from '../assets/images/pp2.png';
import pp3 from '../assets/images/pp3.png';
import '../../src/App.css';

const popularUsers = [{
    username: "elifg",
    pp: pp1,
    text: "1434 entry"
},
{
    username: "mertc",
    pp: pp2,
    text: "1434 entry"
},
{
    username: "furki",
    pp: pp3,
    text: "1434 entry"
}]

const User = () => {

    return (
        <div className="container"> <div className="box-user"><b>Popular Users</b></div>
            {popularUsers.map(
                (item, id) =>
                    <div key={id}>
                        <div className="card">
                            <div className="container">
                                <div className="username">{item.username}</div>
                                <div className="text-styl">{item.text}</div>
                                <img src={item.pp} className="user-pic"/>
                            </div></div>
                    </div>)}
        </div>
    );
}

export default User;