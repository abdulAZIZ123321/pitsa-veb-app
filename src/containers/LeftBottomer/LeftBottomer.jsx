import './LeftBottomer.scss'

const LeftBottomer = () => {
    return (

      <div className="bottomer-wrapper">
         
         <div className="bottomer-inner">
             <hr/>


              <div className="count">
              <h4 className="count-title">Discount</h4>
              <p className="count-text">$0</p>
          </div>
          <div className="total">
              <h4 className="total-title">Sub total</h4>
              <div className="total-text"> $ 21,03</div>
          </div>


          <button type="submit" className="forPay">Continue to Payment</button>
         </div>
      </div>

    )
}

export default LeftBottomer;