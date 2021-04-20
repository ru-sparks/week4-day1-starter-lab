import React, { Component } from "react";
import "./App.css";
class Square extends Component {
  constructor(props) {
    super(props);
  }

  clik = () => {
    alert(`${this.props.color}`);
  };
  
  render() {
    return (
      <button
        className="square"
        key={this.props.index}
        title={this.props.color}
        // TODO 1:  Set the style to show the color
        // A style is expressed in JSX as a JSON object (key-value pairs)
        //  It is familar to the HTML way, but is JSX, not HTML
        onClick={this.clik}
      >
        {this.props.count}
      </button>
    );
  }
}
class App extends Component {
  timeout = 5; 
  go = true;

   // TODO 5: create an update method that will:
  //  1) safely update the color in the state
  //  2) randomly pick a source color
  //  3) randomly pick a target color
  //  4) replace the target with the source  
  cleverUpdate = () => {

    
  };

  constructor(props) {
    super(props);
    this.state = {
      // TODO 4: set allColors to the value in 'props'.
      // Do not use a shallow copy.
      allColors: [], 
      colorCount: this.setColorCount(this.props.allColors.slice()),
      initial: true,
    };

  }

  // TODO 3 Returns an array of objects
  // Property 1:  color name
  // Property 2:  the count of that color
  // Sort the array in decending order by count
  setColorCount(colors) {
    // example returned
    return [{color: "black", count: 40}];
  }

  // TODO 6 Color counts
  // Parameter 1:  color to count 
  // Parameter 2:  array of all colors
  // returns count of the color
  getColorCount(color, colors) {
    let count = 0;
    return count;
  }

  render() {
    let set = [];
    let counts = [];
    // TODO 2: Fix the loop to show all possible colors
    for (let i = 0; i < 1; i++) {
      set.push(
        <Square
          key={i}
          color= "CornflowerBlue" // TODO 1: Using 'allColors' from state, set this one color
          count={this.getColorCount(
            this.state.allColors[i],
            this.state.allColors
          )}
        />
      );
    }

    for (let i = 0; i < this.state.colorCount.length; i++) {
      counts.push(
        <p key={i}>
          {this.state.colorCount[i].color}
          {": "}
          {this.state.colorCount[i].count}
        </p>
      );
    }
    // TODO 0: add || true to the test (Temp code remove)
    if (this.state.colorCount.length > 1) {
      setTimeout(this.cleverUpdate, this.state.initial ? this.timeout * 1000 : this.timeout);
    } else {
      this.go = false;
      counts.push(<p key={1}>Winner!</p>);
    }
    return (
      <div>
        <div>{set}</div>
        <hr />
        <div>{counts}</div>
      </div>
    );
  }
}

App.defaultProps = {
  allColors: [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "Darkorange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ],
};

export default App;
