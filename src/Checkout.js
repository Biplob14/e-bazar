import './Checkout.css';
import Add_img from "./img/add.jpg"
import Subtotal from './Subtotal';

const Checkout = () => {
    return ( 
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={ Add_img } alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your Shopinf Basket
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                <h2>The subtotal</h2>
            </div>
        </div>
     );
}
 
export default Checkout;