import { all, takeLatest } from 'redux-saga/effects'; // takelatest pega a ultima requisicao
import { Types as FavoriteTypes } from '../ducks/favorites';
import { addFavoriteRequest } from './favorites';

export default function* rootSaga() {
  // return yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavoriteRequest)]);
  return yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavoriteRequest)]);
}
