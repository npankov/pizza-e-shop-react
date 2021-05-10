import React, {useCallback, useEffect} from 'react';
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopUp } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoriesItems = [ 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name:'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' }
]

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSort = useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
};

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesItems}
        />

        <SortPopUp
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSort}
        />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) =>
          <PizzaBlock
            onClickAddPizza={handleAddPizzaToCart}
            key={obj.id}
            addedCountItems={cartItems[obj.id] && cartItems[obj.id].items.length}
            {...obj}
          />)
          : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoadingBlock key={index}/>)
        }
      </div>
    </div>
  );
}

export default Home;
