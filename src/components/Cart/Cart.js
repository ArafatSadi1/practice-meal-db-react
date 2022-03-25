import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    // let mealName = [];
    // for (const meal in cart){
    //     mealName = meal.strMeal;
    // }
    const mealName = cart.map(meal => meal.strMeal)
    return (
        <div className='cart'>
            <h2>Added Meal</h2>
            <div className='item'>
                <h4>{mealName}</h4>
            </div>
        </div>
    );
};

export default Cart;