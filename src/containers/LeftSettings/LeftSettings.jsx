import './LeftSettings.scss';

import LeftSettingsItem from '../../components/LeftSettingsItem'

import yoqmidigan from '../../assests/images/icons/yoqmidigan.svg';
import uycha from '../../assests/images/icons/uycha.svg';
import tushunarsizcha from '../../assests/images/icons/tushunarsizcha.svg';
import qongiroqcha from '../../assests/images/icons/qongiroqcha.svg';
import security from '../../assests/images/icons/security.svg';
import danger from '../../assests/images/icons/danger.svg';


let stLeftArr = [
    {
        stImg: yoqmidigan,
        stTitle: 'Appereance',
        stText: 'Dark and Light mode, Font size'
    },
    {
        stImg: uycha,
        stTitle: 'Your Restaurant',
        stText: 'Dark and Light mode, Font size'
    },
    {
        stImg: tushunarsizcha,
        stTitle: 'Products Management',
        stText: 'Manage your product, pricing, etc'
    },
    {
        stImg: qongiroqcha,
        stTitle: 'Notifications',
        stText: 'Customize your notifications'
    },
    {
        stImg: security,
        stTitle: 'Security',
        stText: 'Configure Password, PIN, etc'
    },
    {
        stImg: security,
        stTitle: 'Security',
        stText: 'Configure Password, PIN, etc'
    },
    {
        stImg: danger,
        stTitle: 'About Us',
        stText: 'Find out more about Posly'
    }
]


const LeftSettings = () => {
    return (
        
        <div className="left-settings-wrapper">
           { 
            stLeftArr.map((item) => (
             <LeftSettingsItem
                
               stImg={item.stImg}
                stTitle={item.stTitle}
              stText={item.stText}
            
                
                />
            ))
           }
        </div>


    )
}

export default LeftSettings;