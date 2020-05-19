
import '@gpn-design/uikit/__internal__/src/components/Theme/Theme.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_font/theme_font_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/utils/whitepaper/whitepaper.css';
import React from 'react';
import { cnTheme } from '@gpn-design/uikit/Theme';

import logo from './logo.svg';
import './App.css';
import { Button } from '@gpn-design/uikit/Button';
import MoviesList from './components/MoviesList';

const App = () => {
  return (
    <div
      className={cnTheme({
        color: 'gpnDefault',
        space: 'gpnDefault',
        size: 'gpnDefault',
        font: 'gpnDefault',
        control: 'gpnDefault',
      })}
    >
      <Button title="Test" label="Test"></Button>
      <MoviesList/>
    </div>
  );
};

export default App;
