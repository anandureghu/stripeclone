import React, {useContext, useEffect, useState} from 'react';

import sublinks from './data';


const AppContext = React.createContext();

const useGlobalContext = () => {
        return useContext(AppContext);
    }

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [dropDownData, setDropDownData] = useState([]);

    const [point ,setPoint] = useState({});

    const openDropdown = () => {
        setIsDropdownOpen(true);
    }

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    }

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const setDropDown = link => {
        const data = sublinks.filter(item => item.page === link)
        setDropDownData(data[0].links);
    }

    const getDropdownData = (e) => {
        if(e.target.classList.contains("nav-link")){
            openDropdown();
            const link = e.target.textContent.toLowerCase();
            setDropDown(link);
            const pointData = e.target.getBoundingClientRect();
            setPoint(pointData);
        }
        else{
            closeDropdown();
        }
        
    }

    return <AppContext.Provider value={
        {
            isSidebarOpen,
            isDropdownOpen,
            openSidebar,
            closeSidebar,
            openDropdown,
            closeDropdown,
            getDropdownData,
            dropDownData,
            point,
        }
    }>{children}</AppContext.Provider>
}

export {useGlobalContext, AppProvider};