import React from 'react';
import { Categories, PizzaBlock, SortPopUp } from "../components";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={[
            'Мясные',
            'Вегетарианская',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}
        />

        <SortPopUp
          items={[
            { name: 'популярности', type: 'popular' },
            { name:'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' }
          ]}
        />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default Home;
