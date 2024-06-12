import '../styles/display.css'
import { useState } from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDiningSharp';
function Display(){
    const[search , setSearch] =useState("");

    function handelSearch(event){
       
        
    }

    return(
        <div className='display'>
        <div className='container'>
        <p>Order your food from your favourite restaurants.</p>
        <input 
        onChange={handelSearch}
        placeholder='Search food or Restauntras'/>
        <button>
            <DeliveryDiningIcon 
            fontSize='large'
            color='primary'
                
            />
        </button>
        </div>
        
        
        <img src="images/nepali-food-2.jpg" ></img>
        </div>


    );


}
export default Display