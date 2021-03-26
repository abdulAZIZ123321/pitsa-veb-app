import '../Sidebar/Sidebar.scss';

import SidebarItems from '../../components/SidebarItems';

import { Link } from 'react-router-dom';

import Logo from '../../components/SidebarItems/Logo';

import {
    House,
    Confuse,
    Pitsa,
    Mail,
    Qongiroq,
    Setting,
    Exit
} from  '../../assests/Icons/Icons';





const Sidebar = () => {

     


    return (
        <div className="sdb-wrapper">

            
           <div className="sdb-logo">
                <Logo/>
           </div>
          
          
           <div className="sdb-items">
                <Link to="/">
                    <SidebarItems  icon={<House/>}/>
                
                </Link>

                 <SidebarItems  icon={<Confuse/>}/>

                <Link to="/dashboard">
                     <SidebarItems  icon={<Pitsa/>}/>
                </Link>

                <SidebarItems  icon={<Mail/>}/>
                
                <SidebarItems  icon={<Qongiroq/>}/>

                <Link to="/settings">
                     <SidebarItems  icon={<Setting/>}/>
                
                </Link>
               
                <SidebarItems  icon={<Exit/>}/>
           </div>
           
        </div>
    )
}


export default Sidebar;