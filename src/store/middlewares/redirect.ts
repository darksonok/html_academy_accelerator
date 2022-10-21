import { Middleware } from '@reduxjs/toolkit';
import browserHistory from '../../services/browser-history';
import reducer from '../reducer';

type RedirectAction = {
  type: string;
  payload: string;
}

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: RedirectAction) => {
        if (action.type === 'router/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
