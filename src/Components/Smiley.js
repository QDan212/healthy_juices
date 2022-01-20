import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {useState} from 'react';

export default function Smiley({
	ingredients,
    title,
    prep_time,
    alt_text,
    image
})

{

const [upvotes, setUpvotes] = useState(0);

const handleUpvoteClick = () => {
	setUpvotes(upvotes + 1)
};
  

return(
     <Card>
		 <CardMedia
			component='img'
			height='140'
			image={image}
			 alt={alt_text}
	    />

	   	<CardContent>
			<h2>
				 {upvotes >= 25 && <span>hot! </span>}
		   		 {/* {title} */}
			</h2>
			<div>
		   		 {upvotes}
		    	<IconButton aria-label="upvote" onClick={handleUpvoteClick}>
				<ArrowCircleUpIcon />
		   	    </IconButton>
			</div>
			<p>
		    	{prep_time}
			</p>
			<p>
		    	{alt_text}
			</p>
			<p>
		    	{image}
			</p>
			<p>
		    	{ingredients}
			</p>
			<p>
		    	{title}
			</p>
			
			
	    </CardContent>
    
      

    	</Card>
  	)


}
