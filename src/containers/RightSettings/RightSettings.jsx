import './RightSettings.scss'

import RightSettingMain from '../../components/RightSettingMain'

import RightSettingsItem from '../../components/RightSettingItem';

import RStBottom from '../../components/RStBottom'


const RightSettings = () => {
    return (
        <div className="rst-wrapper">

            <RightSettingsItem/>

            <RightSettingMain/>

            <RStBottom/>
        </div>
    )
}


export default RightSettings;