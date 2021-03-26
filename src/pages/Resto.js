import '../assests/styles/main.scss';

import RestoHead from '../containers/RestoHead'

import RestoMiddle from '../containers/RestoMiddle'

import RestoMain from '../containers/RestoMain'

import LeftSide from '../containers/LeftSide'

const Resto = () => {
    return (
        <div className="resto-page-wrapper">
           
                 <RestoHead/>

                

                <RestoMiddle/>

                 <hr/>


                <RestoMain/>
            

           
              <div className="single">
                    <LeftSide/>
              </div>
            
               
        </div>
    )
}

export default Resto;