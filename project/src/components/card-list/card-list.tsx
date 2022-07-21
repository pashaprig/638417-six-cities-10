import { useState } from 'react';
import { Offers } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers
}

function CardList({ offers }: CardListProps): JSX.Element {
  const [ativeId, setActiveId] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content" id={String(ativeId)}>
      {
        offers.map((offer) => <Card key={offer.id} offer={offer} onMouseOverHandler={() => setActiveId(offer.id)} />)
      }
    </div>
  );
}

export default CardList;
