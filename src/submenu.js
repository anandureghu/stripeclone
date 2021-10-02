import { AiOutlineClose } from 'react-icons/ai';
import {useGlobalContext} from './context';
import sublinks from './data';

function Submenu(){
    const data = useGlobalContext();
    return <>
        <div className={`${data.isSidebarOpen?"submenu active": "submenu"}`}>
            <AiOutlineClose className="submenu-close" onClick={data.closeSidebar}/>
            <div className="empty"></div>
            <div className="submenu-items">
                {sublinks.map((item, index) => {
                    return(
                    <div className="submenu-item" key={index}>
                        <h2>{item.page}</h2>
                        <div className="submenu-item-links">
                            {item.links.map((link, index)=> {
                                return(
                                <a href={link.url} className="submenu-item-link" key={index}>{link.icon} {link.label}</a>)
                            })}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </>
}

export default Submenu;