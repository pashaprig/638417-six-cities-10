import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  favoritesCount: number;
}

function App({favoritesCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen favoritesCount={favoritesCount} />
  );
}

export default App;
