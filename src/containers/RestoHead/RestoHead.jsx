import '../RestoHead/RestoHead.scss'

import RestoHeadItems from '../../components/RestoHeadItems';

const RestoHead = () => {
    return (
        <div className="resto-header">
            <RestoHeadItems data="Tuesday, 2 Feb 2021"/>
        </div>
    )
}

export default RestoHead;