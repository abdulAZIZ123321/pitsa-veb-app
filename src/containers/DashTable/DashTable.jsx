import './DashTable.scss';

import TableTop from '../../components/TableTop'

import TableBottom from '../../components/TableBottom';
import  man1 from '../../assests/images/icons/Avatar1.svg'
import  man2 from '../../assests/images/icons/Avatar2.svg'
import  man3 from '../../assests/images/icons/Avatar3.svg'

let tableArr = [
    {
        tableImg: man1,
        tableName: 'Eren Jaegar',
        tableInfo: 'Spicy seasoned seafood noodles ',
        tablePrice: '$125',
        tableStatus: 'Completed'
    },
    {
        tableImg: man2,
        tableName: 'Reiner Braunn',
        tableInfo: 'Salted Pasta with mushroom sauce',
        tablePrice: '$145',
        tableStatus: 'Preparing'
    },
    {
        tableImg: man3,
        tableName: 'Levi Ackerman',
        tableInfo: 'Beef dumpling in hot and sour soup',
        tablePrice: '$105',
        tableStatus: 'Pending'
    },
    {
        tableImg: man1,
        tableName: 'Eren Jaegar',
        tableInfo: 'Spicy seasoned seafood noodles ',
        tablePrice: '$125',
        tableStatus: 'Completed'
    },
    {
        tableImg: man2,
        tableName: 'Reiner Braunn',
        tableInfo: 'Salted Pasta with mushroom sauce',
        tablePrice: '$145',
        tableStatus: 'Preparing'
    },
    {
        tableImg: man3,
        tableName: 'Levi Ackerman',
        tableInfo: 'Beef dumpling in hot and sour soup',
        tablePrice: '$105',
        tableStatus: 'Pending'
    },
    {
        tableImg: man1,
        tableName: 'Eren Jaegar',
        tableInfo: 'Spicy seasoned seafood noodles ',
        tablePrice: '$125',
        tableStatus: 'Completed'
    },
    {
        tableImg: man2,
        tableName: 'Reiner Braunn',
        tableInfo: 'Salted Pasta with mushroom sauce',
        tablePrice: '$145',
        tableStatus: 'Preparing'
    },
    {
        tableImg: man3,
        tableName: 'Levi Ackerman',
        tableInfo: 'Beef dumpling in hot and sour soup',
        tablePrice: '$105',
        tableStatus: 'Pending'
    },
    {
        tableImg: man1,
        tableName: 'Eren Jaegar',
        tableInfo: 'Spicy seasoned seafood noodles ',
        tablePrice: '$125',
        tableStatus: 'Completed'
    },
    {
        tableImg: man2,
        tableName: 'Reiner Braunn',
        tableInfo: 'Salted Pasta with mushroom sauce',
        tablePrice: '$145',
        tableStatus: 'Preparing'
    },
    {
        tableImg: man3,
        tableName: 'Levi Ackerman',
        tableInfo: 'Beef dumpling in hot and sour soup',
        tablePrice: '$105',
        tableStatus: 'Pending'
    },
    {
        tableImg: man1,
        tableName: 'Eren Jaegar',
        tableInfo: 'Spicy seasoned seafood noodles ',
        tablePrice: '$125',
        tableStatus: 'Completed'
    },
    {
        tableImg: man2,
        tableName: 'Reiner Braunn',
        tableInfo: 'Salted Pasta with mushroom sauce',
        tablePrice: '$145',
        tableStatus: 'Preparing'
    },
    {
        tableImg: man3,
        tableName: 'Levi Ackerman',
        tableInfo: 'Beef dumpling in hot and sour soup',
        tablePrice: '$105',
        tableStatus: 'Pending'
    }
    
]

const DashTable = () => {
    return (
        <div className="dashTable-wrapper">

            <TableTop/>

           <div className="table-bottom-wrap">
                {
                tableArr.map((item) => (
                    <TableBottom
                    tableImg={item.tableImg}
                    tableName={item.tableName}
                    tableInfo={item.tableInfo}
                    tablePrice={item.tablePrice}
                    tableStatus={item.tableStatus}
                    
                    />
                ))
            }
           </div>
        </div>
    )
}

export default DashTable;