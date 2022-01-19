import logo from './logo.svg';
import './App.css';
import Smiley from './Components/Smiley';

function App() {

  const JuiceCards = [
    {
      title: "Kiwi and Banana Sea-moss",
      prep_time: "10 mins",
      image: "https://nutritiontwins.com/wp-content/uploads/2018/08/banana-kiwi-smoothie.jpg" ,
      alt_text: "Best Way to take Kiwi",
      ingredients: ["Kiwi","Banana","Sea-moss"],
      
    },


    {
      title: "Prineapple and Mango Sea-moss",
      prep_time: "18 mins",
      image: "https://nutritiontwins.com/wp-content/uploads/2018/08/banana-kiwi-smoothie.jpg" ,
      alt_text: "Best Way to take Mango",
      ingredients: ["Mango","Pineapple","Sea-moss"],
      
    },


    {
      title: "Sea-moss Infor.",
      prep_time: "3 days",
      image: "https://nutritiontwins.com/wp-content/uploads/2018/08/banana-kiwi-smoothie.jpg" ,
      alt_text: "Best Way to take Sea-Moss",
      ingredients: ["Sea-moss", "Spring Water"],
      
    }

  ]







  return (
    <div className="App">
      {JuiceCards.map(
        (oneCard) => 
        {
          return (
            <Smiley 
              juice={oneCard.title}
              healthBenefits={oneCard.}
              seaMossInfoPage={}
              image={} 
            />

            
          )
        })
      }
      
    </div>

  );
}

export default App;
