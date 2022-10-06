import whiteLogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png';


const Nav = ({ minimal }) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" alt="logos" src={minimal ? colorLogo : whiteLogo} />
            </div>

            
        </nav>
    )
}

export default Nav