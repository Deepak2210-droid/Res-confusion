import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import HomeComponent from './HomeComponent';
import Menu from './menuComponent';
import DishDetail from './Dishdetail';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactComponent from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotion';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';

import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    return (
      <div>
        <BrowserRouter>
          <HeaderComponent />

          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/menu"
              component={() => <Menu dishes={this.state.dishes} />}
            />

            <Route exact path="/contactus" component={ContactComponent} />
            <Redirect to="/home" />
          </Switch>

          <FooterComponent />
        </BrowserRouter>
      </div>
    );
  }
}
export default Main;
