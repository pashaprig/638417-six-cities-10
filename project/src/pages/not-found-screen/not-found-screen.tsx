import { Fragment } from 'react';

function NotFoundScreen(): JSX.Element {
  return (
    <Fragment>
      <h1>404. Page not found</h1>
      <a href="/">Вернуться на главную</a>
    </Fragment>
  );
}

export default NotFoundScreen;
