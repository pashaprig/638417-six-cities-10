import FavoritesLocationItems from '../../components/favorites-location-items/favorites-location-items';
import Logo from '../../components/logo/logo';
import { Offers } from '../../types/offer';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty';

type FavoriteProps = {
  offers: Offers;
};

type CityWhithOffers = {
  name: string;
  offers: Offers
}

type FavoritePlaces = {
  [key: string]: Offers
}

function FavoritesScreen({ offers }: FavoriteProps): JSX.Element {

  const favoritePlacesArr: CityWhithOffers[] = [];
  const favoritePlacesObj: FavoritePlaces = {};

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  for (let i = 0; i < favoriteOffers.length; i++) {
    const currentOffer = favoriteOffers[i];
    const currentElementName = favoriteOffers[i].city.name;

    if (!favoritePlacesObj[currentElementName]) {
      favoritePlacesObj[currentElementName] = [currentOffer];
    } else {
      favoritePlacesObj[currentElementName].push(currentOffer);
    }
  }

  for (const [key, value] of Object.entries(favoritePlacesObj)) {
    favoritePlacesArr.push({
      name: key,
      offers: value
    });
  }

  if (favoriteOffers.length === 0) {
    return <FavoritesEmptyScreen />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesLocationItems favoriteOffers={favoritePlacesArr} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
