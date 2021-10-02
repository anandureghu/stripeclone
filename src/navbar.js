import { FiMenu } from 'react-icons/fi';
import Dropdown from './dropdown';
import {useGlobalContext} from './context';
function Navbar(){

    const data = useGlobalContext();

    return <>
        <nav onMouseOver={data.getDropdownData}>
            <div className="nav-main">
                <h1>Stripe</h1>
                <FiMenu className="nav-icon" onClick={data.openSidebar}/>
            </div>
            <div className="nav-links">
                <ul onMouseOver={data.getDropdownData}>
                    <li className="nav-link"><a href="#" className="nav-link">Products</a></li>
                    <li className="nav-link"><a href="#" className="nav-link">Developers</a></li>
                    <li className="nav-link"><a href="#" className="nav-link">Company</a></li>
                </ul>
            </div>
            <div className="nav-signup">
                <button>Sign UP</button>
            </div>
        </nav>
        <Dropdown/>
    </>
}

export default Navbar;