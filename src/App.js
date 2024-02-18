import React from 'react';
import './App.css';
import Car from './Car';
import logo from './logo.svg';
import pm from './BMW.jpeg'
import tes from './tesla.jpg'
import ben from './bently.jpeg'
import mer from './mercedes.jpeg' 
function App() {
    return (
        <div class="App">
        <div class ="left-items">
            <div class="item">
            <Car 
                brand="BMW" 
                model="1998" 
                color="blue"
                image= {pm}
                borderColor ="#00269F  "
            

            />
            </div>
            <div class="item">
            <Car 
                brand="Mercedes" 
                model="2021" 
                color="black"
                image={mer}
                borderColor ="#000000"
                
                
            />
                </div>
          </div>
          <div class="right-items">
          <div class="item">
            <Car 
                brand="Tesla" 
                model="2022" 
                color="grey "
                image={tes}
                borderColor = "#494949 "
               
            />
            </div>
            <div class="item">
            <Car 
                brand="Bently" 
                model="2020" 
                color="silver "
                image={ben}
                borderColor ="#B6B6B6 "
                
               
            />
            </div>
            </div>
        </div>
    );
}

export default App;


