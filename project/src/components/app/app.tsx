import MainScreen from '../../pages/main-screen/main-screen';
import { FavoritesProps } from '../../types';

function App({favoritesCount}: FavoritesProps): JSX.Element {
  return (
    <MainScreen favoritesCount={favoritesCount} />
  );
}

export default App;
