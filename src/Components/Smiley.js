import React from 'react';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Smiley({
    juice,
    healthBenefits,
    seaMossInfoPage,
    image
})
{
    
  return(
     <Card>
        {/* <CardMedia
		    component='img'
		    height='140'
		    image= "https://nutritiontwins.com/wp-content/uploads/2018/08/banana-kiwi-smoothie.jpg"
            alt="This is my first react project"
	    /> */}
       <CardContent>
           <h2>Page 1</h2>
           <h2>
		        {juice}
		    </h2>
       </CardContent>
       {/* <CardContent>
		    <h2>
		        {juice}
		    </h2>
		    <p>
		        {healthBenefits}
		    </p>
		    <ol>
		        {.map(
			// .map is a built in function of arrays that allows you to process them one at a time.
			// remember when using .map that you need to provide a *unique* key attribute for each item
			    (ingredient) => {
			     return <li key={ingredient}>{ingredient}</li>;}
		    )}
		    </ol>
		    <Rating name="no-value" value={null} />
	    </CardContent> */}

    </Card>
  )


}
