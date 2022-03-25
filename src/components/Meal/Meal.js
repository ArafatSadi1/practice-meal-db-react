import React from 'react';

const Meal = ({meal}) => {
    console.log(meal)
    const {strMeal, strMealThumb, strInstructions, strArea, strCategory} = meal;
    return (
            <div className="card col-3 mx-2 mb-3">
                <img src={strMealThumb} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">Instruction: {strInstructions.slice(0, 100)}...</p>
                    <p className="card-text">Origin: {strArea}</p>
                    <p className="card-text">Category: {strCategory}</p>
                    <a href="#btn" className="btn btn-primary">Add To Cart</a>
                </div>
            </div>
    );
};

export default Meal;