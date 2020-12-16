import React, { useState } from "react";
import "./styles.css";

const dietdb = {
  Protein: [
    {
      name: "Bolied egg",
      cal: "72 cal",
      Carbs: "0.6 grams",
      fat: "5.3 grams",
      Protein: "6.3 grams "
    },

    {
      name: "Paneer",
      cal: "250 cal(in 70gm)",
      Carbs: "Nil ",
      fat: "15 grams",
      Protein: "20 grams "
    },
    {
      name: "Chicken Brest",
      cal: "231 cal(in 140gm)",
      Carbs: "Nil ",
      fat: "5 grams",
      Protein: "39 grams "
    }
  ],

  Fats: [
    {
      name: "Penaut Butter",
      cal: "200 cal (2 tABLESPOONS)",
      Carbs: "5 grams",
      fat: "17 grams",
      Protein: "6 grams "
    },

    {
      name: "Almond Butter",
      cal: "190 cal (2 tABLESPOONS)",
      Carbs: "5 grams",
      fat: "18 grams",
      Protein: "7 grams "
    },
    {
      name: "Ghee",
      cal: "350 cal (1 tABLESPOON)",
      Carbs: "nil",
      fat: "30 grams",
      Protein: "Nil "
    }
  ],
  Carbs: [
    {
      name: "Rice",
      cal: "242 cal (in 150 gms )",
      Carbs: "53 grams",
      fat: "Nil",
      Protein: "6 grams "
    },
    {
      name: "Sweet Potato",
      cal: "86 cal (100)",
      Carbs: "30 grams",
      fat: "Nil",
      Protein: "1.4 grams "
    }
  ]
};

// var username = prompt("Please tell your name ")
export default function App() {
  var [selectedMacro, showmacro] = useState("Fats");

  function buttonClickhandler(macroname) {
    showmacro(macroname);
    console.log(macroname);
  }
  return (
    <div className="App">
      <h1 
            style={{ textAlign: "left"

            }} >
              Make your diet 🥗 Fun !!</h1>
              <p
              style={{ textAlign: "left",
              fontStyle:"italic"
              

            }}>
                Here you can find my favorite food for respective macros
              </p>
      {/* <h2>Welcome <em {}>{username}</em></h2> */}
      <div style={{ textAlign: "left" }}>
        {Object.keys(dietdb).map((macroname) => (
          <button onClick={() => buttonClickhandler(macroname)}>
            {" "}
            {macroname}{" "}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {dietdb[selectedMacro].map((finalmacro) => (
            <li style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid #D1D5DB",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem",
              alignContent:"center",
              fontWeight:"bold",
              textAlign: "left"
              
            }}>
              {finalmacro.name} 
              <ul
              style={{
                alignContent:"center",
                fontWeight:"lighter",
                textAlign: "left"
              }}>{finalmacro.cal}</ul>
              <ul
              style={{
                alignContent:"center",
                fontWeight:"lighter",
                 textAlign: "left"
              }}
              >
                (
                 C: {finalmacro.Carbs},
                 F: {finalmacro.fat},
                 P: {finalmacro.Protein}
                )
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
