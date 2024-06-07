import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import ThemePage from './component/Theme/ThemePage';
import Card from './component/Card/Card';

function App() {
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(0);

  async function getItems() {
    const response = await axios.get('/api/theme');
    setThemes(response.data);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ThemePage
              themes={themes}
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
          }
        />

        <Route path="/theme/:themeId/question/:questionId" element={<Card />} />
      </Route>
    </Routes>
  );
}

export default App;
