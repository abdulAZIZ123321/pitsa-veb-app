import '../assests/styles/main.scss'

import DashTop from '../containers/DashTop'

import DashTable from '../containers/DashTable'

import RightList from '../containers/RightList'

import RightBar from '../containers/RightBar'


const Dashboard = () => {
    return (
        <div className="dashboard">
            

            <div className="left-side-dash">
                <div className="head-texts">
                <h1 className="dashboard-title">Dashboard</h1>
                <p className="dash-title2">Tuesday 2 Feb, 2021</p>
                </div>
            <DashTop/>

            <DashTable/>
            </div>


            <div className="thisIsRight">
                <RightList/>


                <RightBar/>
            </div>
        </div>
    )
}



export default Dashboard;