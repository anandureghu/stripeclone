import {useGlobalContext} from './context';
import {useRef, useEffect} from 'react';

function Dropdown(){
    const data = useGlobalContext();
    const triangle = useRef(null);
    const dropdown = useRef(null);
    useEffect(() => {
        triangle.current.style.left = `${data.point.left + (data.point.width/2) - dropdown.current.getBoundingClientRect().left - 7}px`;
        // console.log(data.point.left);
    }, [data.dropDownData])

    return <>
    
        <div className={`${data.isDropdownOpen?"dropdown active":"dropdown"}`} onMouseLeave={data.closeDropdown} ref={dropdown}>
            <div className="drop-down-contents">
                <div className="drop-triangle" ref={triangle}></div>
                {data.dropDownData.map((item,index )=> {
                    return(
                    <div className="dropdown-item" key={index}>
                        <a href={item.url}>{item.icon} {item.label}</a>
                    </div>)
                }) }
            </div>
        </div>
    </>
}

export default Dropdown;