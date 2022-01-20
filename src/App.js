import Smiley from './Components/Smiley';
import Grid from '@mui/material/Grid';
import './App.css';
// to use a .css file, we can also import it




function App() {

  const JuiceCards = [
    {
      title: "Kiwi and Banana Sea-moss",
      prep_time: "10 mins",
      image: "https://nutritiontwins.com/wp-content/uploads/2018/08/banana-kiwi-smoothie.jpg" ,
      alt_text: "Best Way to take Kiwi",
      ingredients: ["2 Kiwi"," 1 Banana","1/2 cup of Sea-moss"]
      
    },


    {
      title: "Prineapple and Mango Sea-moss",
      prep_time: "18 mins",
      image: "https://cdn.shopify.com/s/files/1/0553/9843/2930/products/1616859095704_DSC_2157-01_1024x1024@2x.jpg?v=1616879682" ,
      alt_text: "Best Way to take Mango",
      ingredients: ["2 Mango"," 1/2 Pineapple"," 1/2 cup of Sea-moss"]
      
    },


    {
      title: "Sea-moss Infor.",
      prep_time: "3 days",
      image: "https://i.etsystatic.com/24579560/r/il/f2becf/2992012065/il_794xN.2992012065_ha1z.jpg" ,
      alt_text: "Best Way to take Sea-Moss",
      ingredients: ["5 cups of Sea-moss", " 1 16oz bottle Spring Water"]
      
    }

  ];

 
  return (
    <Grid container spacing = {2}>
      {
		  JuiceCards.map((Smiley) => {
		      return <Grid item xs={4}>
			      <Smiley
			           ingredients={Smiley.ingredients}
			           title={Smiley.title}
			           prep_time={Smiley.prep_time}
			           image={Smiley.image}
			           alt_text={Smiley.alt_text}
		      	/>
		    </Grid>
		  })
	  }
  </Grid>

  );
}

export default App;
