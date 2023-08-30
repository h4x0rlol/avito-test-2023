import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { PATHS } from './utils';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import GamePage from './pages/GamePage';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path={PATHS.MAIN} element={<MainPage />} />
      <Route path={PATHS.GAME} element={<GamePage />} />
      <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
    </RouterRoutes>
  );
}
