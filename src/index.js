import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();

let greeting = '';
const cssStyle = {};

if(curDate >= 1 && curDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = "green";

}else if(curDate >= 12 && curDate < 19){
  greeting = 'Good Afternoon';
  cssStyle.color = "Orange";

}else{
  greeting = 'Good Night';
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
   <div>
     <h1>
       Hello Sir, <span style={cssStyle}> {greeting} </span> 
     </h1>
   </div>
  </>,
  document.getElementById("root")
);


/*

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = 'Subhash';
const lname = 'Yadavv';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const img4 = "https://picsum.photos/350/300";
const links = "http://yadavhistory.com/royal_yadavs";

ReactDOM.render( 
  //use <></> ya react.fragment ya <div> ya []
<>
 <h1>My name is {fname} {lname}</h1>
 <h1>My name is {fname + " " + lname}</h1>
 
 {/*template literals code*

 <h1>{`My name is ${fname} ${lname}`}</h1>

 <p>my lucky number is {40+10}</p>

 <p>Current Date is = {currDate}</p>
 <p>Current Date is = {currTime}</p>

 {/* JSX attribute contenteditable bs*

 <h2 contentEditable="true">I Am {lname}</h2>

 <h1 className="heading">I Am {lname}</h1>
<div className="img_div">
 <img src={img1} alt="randomimages" />
 <img src={img2} alt="randomimages" />
 <img src={img3} alt="randomimages" />

 <a href={links} target="_yadav">
   <img src={img4} alt="randomimages" />
 </a>
</div>
</>,
  document.getElementById('root')
);

*/
// in javascript
//var h1 = document.createElement("h1");
//h1.innerHTML = "Hello World Hello World!!!";
//document.getElementById("root").appendChild(h1); 