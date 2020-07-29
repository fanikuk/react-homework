import { ITEMS } from '../components/ShowCase/Items';

const initialState = {
  phones: ITEMS.phones,
  tablets: ITEMS.tablets,
  accessories: ITEMS.accessories,
};

const itemsReducer = (state = initialState) => state;
export default itemsReducer;
