import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from 'redux';
import { APIRoute } from '../const';
import { makeFakeCameraCards, makeFakePromo } from '../utils/mock';
import { fetchCamerasAction, fetchPromoAction } from './api-actions';
import { changeCameraLoadingStatus, changePromoLoadingStatus, loadCameras, loadPromo } from './actions';

const mockCameraCards = makeFakeCameraCards();
const mockPromo = makeFakePromo();

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should dispatch loadCameras and changeCameraLoadingStatus then GET /cameras', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Cameras)
      .reply(200, mockCameraCards);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchCamerasAction());

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchCamerasAction.pending.type,
      loadCameras.type,
      changeCameraLoadingStatus.type,
      fetchCamerasAction.fulfilled.type
    ]);
  });

  it('should dispatch loadPromo and changeCamraLoadingStatus then GET /cameras', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromo);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchPromoAction());

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      loadPromo.type,
      changePromoLoadingStatus.type,
      fetchPromoAction.fulfilled.type
    ]);
  });
});
