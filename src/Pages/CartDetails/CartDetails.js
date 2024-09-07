import { useContext, useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import { CartContext } from "../../Contexts/CartProvider";
import Navbar from "../Shared/Navbar/Navbar";

const CartDetails = () => {
    const {carts, setCarts} = useContext(CartContext);
    let [sum,setSum] = useState(0);
    // let ref = useRef(0);

    // let [subtotal,setSubtotal] = useState(0)

    // let sum = 0;
   

    useEffect(()=>{
       let total = 0;
        carts.forEach(element => {
            console.log(element);
           total+=(element.price*element.item);
          
            
        });
        console.log("for each er moddhe")
        setSum(total);
       

    },[carts])

    // useEffect(()=>{
       
    //     carts.forEach(element => {
    //         console.log(element);
    //         ref.current+=element.price;
          
            
    //     });
    //     // setSubtotal(sum);
       

    // },[carts,sum])
   

    const increaseItem = (id) => {
        let updatedCarts = [...carts];
        updatedCarts[carts.findIndex(item => item.id === id)].item++;
        // console.log(sum);
        sum+=updatedCarts[carts.findIndex(item => item.id === id)].price;
        // setSum(sum);
        setCarts(updatedCarts);

    }
    const decreaseItem = (id) => {
        let updatedCarts = [...carts];
        let i = carts.findIndex(item => item.id === id);
        setSum(sum+1)
        console.log(i);
        if(updatedCarts[i].item>0){
            updatedCarts[i].item--;
        }
        setCarts(updatedCarts);

    }

    const handleRemove = (id)=> {
        let updatedCarts = carts.filter(cart => cart.id !== id);
        // updatedCarts[carts.findIndex(item => item.id === id)].item++;
        // // console.log(sum);
        // sum+=updatedCarts[carts.findIndex(item => item.id === id)].price;
        // setSum(sum);
        setCarts(updatedCarts);

    }
    const handleCheckout = () =>{
        setCarts([]);
        alert("Developer is sleeping...")
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full flex " >
                <div className=" flex mx-auto justify-between w-[90%]  ">
                    <div className="w-[600px]  ">
                        <h2 className="font-bold   text-lg m-2"> An overview of your order</h2>
                        {/* Cart items */}
                        <div className="w-full bg-[#FAFAFA] ">
                            {carts.map((cartItem,index) => (
                                <div key={index} className="border flex w-full pb-5">
                                    <div className="  h-full w-[80px] my-auto ">
                                        <div className=" flex justify-around">
                                            <div><button onClick={()=>increaseItem(cartItem.id)} >+</button>  </div>
                                            <div>{cartItem.item} </div>
                                            <div> <button onClick={()=>decreaseItem(cartItem.id)}> -</button> </div>
                                            
                                        </div>
                                    </div>
                                    <div className="flex justify-between   w-full">
                                        {/* image */}
                                        <div className="flex">
                                            <img className="h-[100px] p-1 w-[100px] object-cover " src={cartItem.image} alt="" />
                                            <p className="font-semibold ">{cartItem.title}</p>
                                        </div>
                                            {/* price and cross section */}
                                        <div>
                                            <div className="flex flex-col justify-between  h-full">
                                                <div className="cross  flex justify-end p-1 "><button onClick={()=>handleRemove(cartItem.id)}> <RxCross1 /> </button></div>
                                                <div className="price" >{cartItem.price}</div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                    <div className="w-[300px]  mt-4">
                        <h2 className="font-bold text-lg my-2"> Order details</h2>
                        <div>
                            <div className=" bg-[#FAFAFA] border rounded pt-3 p-1">
                                <div className=" flex justify-between ">
                                    <p>Subtotal</p>
                                    <p>€{sum}</p>
                                </div>
                                <div className=" flex justify-between ">
                                    <p>Shipping</p>
                                    <p>free</p>
                                </div>
                                <div className=" flex justify-between border-b-2 h-16">
                                    <p>Estimated Tax</p>
                                    <p>€0.0</p>
                                </div>
                                <div className=" flex justify-between h-16">
                                    <p>Total</p>
                                    <p>€{sum}</p>
                                </div>
                            </div>

                            </div>
                            <button 
                 onClick={handleCheckout } 
                 className=" bg-[black] h-[42px] border rounded my-2  text-[#ffffff] w-full disabled ">
                  Go to Checkout
                </button> 
                        </div>

                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default CartDetails;