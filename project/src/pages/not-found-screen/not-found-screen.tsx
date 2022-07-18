import { Fragment } from 'react';
import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <Fragment>
      <Logo />
      <br />
      <h1>404. Page not found</h1>
    </Fragment>
  );
}

export default NotFoundScreen;
