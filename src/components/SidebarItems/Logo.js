import logo from '../../assests/images/icons/Logo.svg'

import './SidebarItems.scss'



const Logo = () => {
    return (
        <div className="some-wrap">
            
             <a href="" className="logo">
                <img src={logo} alt="" className="some-lg"/>
            </a>
          
        </div>
    )
}

export default Logo;