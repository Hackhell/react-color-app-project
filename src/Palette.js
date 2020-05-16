import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import { generatePalette } from './colorHelper'
import seedColors from './seedColors'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({level: newLevel})
  }
    render() {
      const { colors } = this.props.palette;
      const { level } = this.state; 
      // console.log(generatePalette(seedColors[4]));
      const colorBoxes = colors[ level ].map(color => (
        <ColorBox background={color.hex} name={color.name}/>
      ));
        return (
            <div className='Palette'>
            
            <Slider 
              defaultValue={ level }  
              min={100} 
              max={900}
              step={100} 
              onAfterChange={this.changeLevel}
            />
            
            <div className='Palette-colors'>
                {colorBoxes}
              </div>
              {/* footer */}  
            </div>
        )
    }
}

export default Palette
