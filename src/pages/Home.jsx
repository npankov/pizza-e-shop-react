import React, {useCallback, useEffect} from 'react';
import { Categories, PizzaBlock, SortPopUp } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";

const categoriesItems = [ 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name:'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' }
]

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchPizzas());
  }, [dispatch]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoriesItems}
        />

        <SortPopUp
          items={sortItems}
        />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
