import React, {Component} from 'react';
import Navbar from './MyAppBar';
import FoodCard from './FoodCard';
import SimpleMap from './SimpleMap'
class App extends Component {
  constructor(){
    super();
    this.state ={
      foods :[
        {
          title : 'Fried rice with omellete',
          date : '19 April 2019',
          description : 'enak lezat berkualitas bintang lima'
        },
        {
          title : 'Kentaaaang gorengg',
          date : '19 Mei 2019',
          description : 'enak lezat berkualitas bintang lima'
        }
      ]
    }
  }
  render(){
    return(
     <div>
     <Navbar/>
     <br/>
     {this.state.foods.map((data)=>{
       return(
         <div>
         <FoodCard title={data.title} date={data.date} description={data.description}/>
         <br/>
         </div>
       )
     })}
     <FoodCard title="Dear Nasyitaaaaaaaaaaaaaaa" date="26 Mei 2019"/>
     </div>,

     <SimpleMap/>
    )
  }
}

export default App;