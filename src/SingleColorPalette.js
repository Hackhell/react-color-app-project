import React, { Component } from 'react'
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
      //  console.log(this._shades);
    }

    gatherShades (palette, colorToFilterBy) {
        // return all shades of given color
        let shades = [];
        let allColors = palette.colors;
        
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1);
    }
    render() {
        this.colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.id} 
                name={color.name} 
                background={color.hex}
                showLink={false}
            />
        ))
        return (
            <div className='Palette'>
                <h2>Single Color Palette</h2>                
                <div className='Palette-colors'>
                    {this.colorBoxes}
                </div>
            </div>
        )
    }
}

export default SingleColorPalette
