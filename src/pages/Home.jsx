import React, {useCallback, useEffect} from 'react';
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopUp } from "../components";
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
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  console.log(category);

  useEffect(() => {
      dispatch(fetchPizzas());
  }, [category, dispatch]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesItems}
        />

        <SortPopUp
          items={sortItems}
        />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
          : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoadingBlock key={index}/>)
        }
      </div>
    </div>
  );
}

export default Home;
