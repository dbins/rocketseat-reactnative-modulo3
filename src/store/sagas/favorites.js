import { call, put, select } from 'redux-saga/effects';
// call: Para trabalhar com promisses
// put: Para enviar dados para o reducer
// select: Para pesquisar o state
import api from '../../services/api';
// import { addFavoriteSuccess, addFavoriteError } from '../actions/favorites';
import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavoriteRequest(action) {
  // Nome da funcao - Parametros da funcao
  try {
    const response = yield call(api.get, `repos/${action.payload.repoName}`);
    const favorites = yield select(state => state.favorites.data);
    console.tron.log(response);
    // response.data é o retorno da api
    if (favorites.find(favorite => favorite.id === response.data.id)) {
      // yield put(addFavoriteError('Repositório duplicado'));
      yield put(FavoriteActions.addFavoriteError('Repositório duplicado'));
    } else {
      // Sempre usar o yield
      // yield put(addFavoriteSuccess(response.data));
      yield put(FavoriteActions.addFavoriteSuccess(response.data));
    }
  } catch (err) {
    // yield put(addFavoriteError('Repositório não existe'));
    yield put(FavoriteActions.addFavoriteError('Repositório não existe'));
  }
}
