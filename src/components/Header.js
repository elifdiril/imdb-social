import Icon from '../assets/images/icon.png';
import Pp from '../assets/images/pp1.png';
import SearchPic from '../assets/images/search.png';

const Header = () => {

    return (
        <div className="header">
            <img src={Icon} className="header-pic" />
            <img src={Pp} className="header-pp" />
            <div className="search"></div>
            <img src={SearchPic} className="search-pic" />
        </div>
    )
}

export default Header;