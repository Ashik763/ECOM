import { useContext } from "react";
import { IoBagOutline } from "react-icons/io5";
import { CartContext } from "../../Contexts/CartProvider";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const navigate = useNavigate();
    
    const cartDetails = () => {
        navigate("/cart-details"); 
    }
    const {carts} = useContext(CartContext);

    let sum = 0;
    carts.forEach(element => {
        console.log(element);
        sum+=element.item;
        
    });
    return (
        <div onClick={cartDetails} className="relative ">
            <IoBagOutline className="scale-105 w-[45px] h-[35px] font-bold " />
            <div className="count h-[25px] w-[25px]  bg-[black] text-[white] border rounded-lg absolute text-center top-5 right-0 ">
              {sum}

            </div>
            
        </div>
    );
};

export default Cart;