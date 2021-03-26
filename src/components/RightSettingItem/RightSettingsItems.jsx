import './RightSettingsItem.scss'

const RightSettingsItem = () => {
    return (
        <div className="rsi-wrapper">
            <div className="rsi-top-wrapper">
                <h4 className="rsi-top-title">Products Management</h4>


                <select name="" id="" className="rsi-selecter">
                    <option selected value="ManageCategories">Manage Categories</option>
                </select>
            </div>

            <div className="rsi-bottom-wrapper">
                <a href="#" className="rsi-link">Hot Dishes</a>
                <a href="#" className="rsi-link">Cold Dishes</a>
                <a href="#" className="rsi-link">Soup</a>
                <a href="#" className="rsi-link">Grill</a>
                <a href="#" className="rsi-link">Appetizer</a>
                <a href="#" className="rsi-link">Dessert</a>
            </div>
        </div>
    )
}

export default RightSettingsItem;