import { useState } from 'react';
import '../SidebarItems/SidebarItems.scss'



const SidebarItems = ({icon}) => {
    const [active, setActive] = useState(false)


    return (

     
            
        

        <div className="sidebarItems-wrapper"> 

           

            
                
           <div className="sdb-btn-wrapper">
                <button onClick={()=> setActive(!active)} className={`sdb-btn ${active ? 'active' : ''}`}>

                    {icon}
                </button>
           </div>
           
           
        </div>
       
    )
}

export default SidebarItems;