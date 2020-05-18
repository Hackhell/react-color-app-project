import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

function App() {
  return (
    <Switch>
    <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>}/>
    <Route exact path='/palette/:id' render={() => <h1>INDIVIDUAL PALETTE</h1>}/>
    </Switch>

/*    <div>
      <Palette palette={generatePalette(seedColors[4])}
      />
    </div> */
  );
}

export default App;
