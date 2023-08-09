import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {

    const [cuisine, setCuisine] = useState ([]);
    let params = useParams();

    const getCuisine =  async (name) => {
        const data = await fetch (`GET https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );
        const receipes = await data.json();
        setCuisine(receipes.results);
    }

    useEffect(() => {
        // getCuisine('italian')
        console.log(params);
    },[]);

    return <div>
        
    </div>;
}

export default Cuisine;