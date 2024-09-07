import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../Contexts/CartProvider";

const Chairs = () => {
  const [chairs, setChairs] = useState([]);
  const [totalChairs,setTotalChairs] = useState([]);
  const {carts, setCarts} = useContext(CartContext);
  const [page,setPage] = useState(1);

  const location = useLocation();
  let fileName = location.pathname.slice(1);
  if(fileName.length===0)fileName="rocking_chairs"

  console.log(location.pathname.slice(1));
  useEffect(() => {
    fetch(`./${fileName}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTotalChairs(data);
        setChairs(data.slice(0,6));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [fileName]);


  const handlePagination = (page) =>{
    // console.log(page);
    setPage(page);
    console.log(totalChairs.slice((page-1)*6,((page*6)-1)));
   setChairs(totalChairs.slice((page-1)*6,(page*6)))

  }
  return (
    <div className="border p-10 min-h-[110vh] relative">
      <div className="flex flex-row flex-wrap justify-around">
      {chairs.map((chair) => (
        <div key={chair.id} className="border rounded w-[277px] m-2  ">
     
          <div className="card bg-base-100  m-2 ">
            <figure className="p-2  ">
              <img
              className="border object-cover rounded h-[245px] max-w-[220px]"
                src={chair.image}
                alt="Shoes"
              />
            </figure>
            <div className="p-2">
              <h4 className=" font-semibold">{chair.title}</h4>
              <div className="flex justify-between my-1" >
                <div className="font-bold" >
                  {chair.price}

                </div>
                <div className="text-[ #ABABAB] line-through " >
                  {chair.oldPrice}
                </div>
                  <div className="text-[red] font-bold">
                    {chair.discount}
                  </div>
                </div>
              <p className="text-[#838383] text-sm my-1 ">{chair.description}</p>
              <div className="card-actions justify-end">
               {carts.map(cart=>cart.id).includes(chair.id)?
               <button 
                disabled
                onClick={()=>setCarts([{...chair,item:1},...carts]) } 
                className=" bg-[black] h-[42px] border rounded my-2  text-[#ffffff] w-full cursor-not-allowed opacity-50">Add to cart</button>
                :
                <button 
                 onClick={()=>setCarts([{...chair,item:1},...carts]) } 
                 className=" bg-[black] h-[42px] border rounded my-2  text-[#ffffff] w-full disabled ">
                  Add to cart
                </button>  } 
              </div>
            </div>
          </div>

        </div>
      ))}
      </div>
      {/* Pagination */}
      <div className="flex absolute  bottom-0 left-5">
        {[1,2,3,4].map( currentPage =>(
          <div className="flex">
            {currentPage === page ? <button onClick={()=>handlePagination(currentPage)} className="join-item text-blue-700 btn font-bold me-2">{currentPage}</button>
:          <button onClick={()=>handlePagination(currentPage)} className="join-item btn me-2">{currentPage}</button>
}

          </div>

        ))}
 

</div>
    
    </div>
  );
};

export default Chairs;
