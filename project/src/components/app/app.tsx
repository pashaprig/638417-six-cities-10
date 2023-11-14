import MainScreen from '../../pages/main-screen/main-screen';

type AppPrors = {
  favoriteCount: number
}

function App({favoriteCount}: AppPrors): JSX.Element {
  return (
    <MainScreen favoriteCount ={favoriteCount}/>
  );
}

export default App;
