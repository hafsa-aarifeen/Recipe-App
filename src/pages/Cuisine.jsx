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
        getCuisine(params.type)
        console.log(params.type);
    },[params.type]);

    return <Grid>
        {cuisine.map((item))}
    </Grid>;
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem; 
`;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;