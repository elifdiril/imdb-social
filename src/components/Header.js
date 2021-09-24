import Icon from '../assets/images/icon.png';
import Pp from '../assets/images/pp1.png';
import SearchPic from '../assets/images/search.png';

const Header = () => {

    return (
        <div className="header">
            <img alt="icon"  src={Icon} className="header-pic" />
            <img alt="pp" src={Pp} className="header-pp" />
            <div className="search"></div>
            <img alt="search" src={SearchPic} className="search-pic" />
        </div>
    )
}

export default Header;