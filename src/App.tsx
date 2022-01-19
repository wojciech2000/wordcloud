import CloudeGame from "components/cloudGame/CloudeGame.route";
import StartGame from "components/startGame/StartGame.route";
import Summary from "components/summary/Summary.route";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "utilities/config/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<StartGame />} path={routes.startGame} />
        <Route element={<CloudeGame />} path={routes.cloudGame} />
        <Route element={<Summary />} path={routes.summary} />
      </Routes>
    </Router>
  );
}

export default App;
