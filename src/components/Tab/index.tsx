import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

type TabProps = {
    tabs: string[],
    components: any[],
}

export const Tab: FunctionComponent<TabProps> = ({ tabs, components }) => {

    const [currentActive, setActive] = useState(0);

    useEffect(() => {
     const setActiveTab = document.getElementById(`tab_${currentActive}`);
    
     if (setActiveTab) {
        const previousActiveTab = document.querySelector('.active_tab')
        setActiveTab.classList.toggle('active_tab');

        if (previousActiveTab) {
            previousActiveTab.classList.toggle('active_tab');
        }
     }

    }, [currentActive])
    
    

    function handleTabPress(index: number) {
        console.log(`clicked ${index}`)
        setActive(index);
    }

    return (
        <>
            <div className="tabcomponent_tabrow">
            {tabs.map((tab, index ) => (
                    
                    <Link onClick={()=> handleTabPress(index)} key={index} id={`tab_${index}`} className={`tabcomponent_tabtext tabcomponent_tablink`} to={`#${tab}`}>
                        {tab}
                    </Link>
                )
            )}
            </div>
            {components[currentActive]}

            
        </>
    )
}