import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from './components';
import { Home, Cart } from './pages';
// import store from './redux/store';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas'
import axios from 'axios';


// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         setPizzas(data.pizzas);
//       })
//   }, [])
//
// }
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        this.props.setPizzas(data.pizzas)
      })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={this.props.items}/>}/>
          <Route exact path="/cart" component={Cart}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
