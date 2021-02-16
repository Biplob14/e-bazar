import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Add_img from "./img/add.jpg"
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    return ( 
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={ Add_img } alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your Shoping Basket
                    </h2>

                    { basket.map(item => (
                        <CheckoutProduct
                            id      = { item.id }
                            title   = { item.title }
                            image   = { item.image }
                            price   = { item.price}
                            rating  = { item.rating}
                        />
                    ))}
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