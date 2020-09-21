import React ,{useState,useEffect} from 'react'
import "./Header.css";
import Result from './Result'

import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';


function Header() {
 
    const ID = '277b31c9'
    const Keys= 'eea9876a9a3e4b9f04f9fe0ff9d0451c'	

    const[search,setSearch]=useState('');
    const [recipes,setRecipes]=useState([]);
    const [query , setQuery] = useState('chicken')
    

 
    useEffect(()=>{

        const getRecipes = async()=>{
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${Keys}`)
            const data = await response.json();
            setRecipes(data.hits);
            console.log('pawan',data)
        }
        getRecipes();
     
    },[query])

    const handleChange =(e)=>{
        e.preventDefault();
        setQuery(search);
    }
    return (

        <div className="koko">
        <div className="header">
            
           

        {/* LOGO */}

        <img className="header__icon" src="https://i.pinimg.com/474x/f4/68/ec/f468ec890f1fddd738f5e97f4cbfe8b4.jpg" />


        {/* INPUT */}
              

        <form onSubmit={handleChange} className="header__center">

        <input type="text" placeholder="search recepie here ..." value={search} onChange={(e)=>setSearch(e.target.value)}  />   <SearchIcon/>
       
        </form>


        {/* Icon */}
        
        <div className="header__right"> 
        
         <MoreVertRoundedIcon/>
         <ShoppingBasketRoundedIcon/>
         <Avatar src="https://i.pinimg.com/564x/92/96/8b/92968ba9221c75af8728abea50e4d65c.jpg" />

         </div>

       </div>
        <div className="final"> 


        {
            recipes.map(e=> <Result image = {e.recipe.image} calories={e.recipe.calories} label={e.recipe.label} />)
        }

        </div>
      
       
        
    </div>
    )
    
}

export default Header;
