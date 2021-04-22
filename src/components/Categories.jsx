import React from 'react';

class Categories extends React.Component {

  state = {
    activeItem: null
  }

  onSelectItem = (index) => {
    this.setState({
      activeItem: index
    })
  }

  render() {
    console.log(this.state)
    const { items, onClickItem } = this.props;
    return (
      <div className="categories">
        <ul>
          <li>Все</li>
          {
            items.map((name, index) =>
            <li
              className={this.state.activeItem === index ? 'active' : ''}
              onClick={() => this.onSelectItem(index)}
              key={`${name}_${index}`}>{name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Categories;

// function Categories({ items, onClickItem }) {
//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {
//           items.map((name, index) =>
//           <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>{name}</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Categories;
