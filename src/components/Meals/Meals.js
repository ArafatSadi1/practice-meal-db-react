import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect( () =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${'a'}
        `
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
        }, [])
    return (
        <div>
            <h1 className='text-center mt-3'>Welcome To Meal-BD</h1>
            <div className='cart-main'>
                <Cart></Cart>
            </div>
            <div className='row container'> 
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;