import '../../src/App.scss';
import users from '../assets/users';

const User = () => {

    return (
        <div className="container"> <div className="box-user"><b>Popular Users</b></div>
            {users.map(
                (item, id) =>
                    <div key={id}>
                        <div className="card">
                            <div className="container">
                                <div className="username">{item.username}</div>
                                <div className="text-styl">{item.text}</div>
                                <img alt="pp" src={item.pp} className="user-pic"/>
                            </div></div>
                    </div>)}
        </div>
    );
}

export default User;