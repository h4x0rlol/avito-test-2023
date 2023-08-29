import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { Paths } from './utils';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import GamePage from './pages/GamePage';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path={Paths.MAIN} element={<MainPage />} />
      <Route path={Paths.GAME} element={<GamePage />} />
      <Route path={Paths.NOT_FOUND} element={<NotFound />} />
    </RouterRoutes>
  );
}
