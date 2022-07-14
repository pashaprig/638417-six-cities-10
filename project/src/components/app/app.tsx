import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import { FavoritesProps } from '../../types';

function App({ favoritesCount }: FavoritesProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen favoritesCount={favoritesCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
