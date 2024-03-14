import React from 'react'
import { useState } from 'react';

function Color(){
    const[word, setWord]= useState('');
    const[colors,setColors]= useState([]);

    const colorData={
        apple:['#ff0000','#8b0000'],
        banana: ['#ffdd00', '#ffd700'],
        grape: ['#6f2da8', '#4b0082'],
        orange: ['#ffa500', '#ff8c00'],
        strawberry: ['#ff3855', '#c81a36'],
        blueberry: ['#4682b4', '#1e90ff'],
        lemon: ['#fff44f', '#ffdd22'],
        watermelon: ['#fc6c85', '#ff2d55'],
        pineapple: ['#ffeb3b', '#ffd700'],
        kiwi: ['#8ee53f', '#5cbf0d'],
        plum: ['#8e4585', '#6a0dad'],
        apricot: ['#ffb347', '#ff7f24'],
        lime: ['#00ff00', '#32cd32'],
        cantaloupe: ['#ffbf87', '#ff9966'],
        dragonfruit: ['#d11141', '#00b159'],
        passionfruit: ['#ff6e40', '#ff3e03'],
        pomegranate: ['#c0392b', '#e74c3c']
    }
    const handleInputChange = (e) => {
        const inputWord = e.target.value;
        setWord(inputWord);
        if (colorData[inputWord]) {
            setColors(colorData[inputWord]);
        } else {
            setColors([]);
        }
    };
    
    return(
        <div className='container'>
           
            <label className='name'>Enter Fruit Name You will get Color Name :</label>
            <input className="words"type='text' placeholder='Enter fruit name' value={word} onChange={handleInputChange}/>
            <div className='color-list'>
            {colors.map((color,index)=>(
                <div key={index} className="color-card" style={{ backgroundColor: color }}>{color}</div>

            ))}
             
            </div>
            
        </div>
    )
}
export default Color;