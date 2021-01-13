import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import Menu from './menuComponent';
import DishDetail from './Dishdetail';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactComponent from './ContactComponent';
import AboutUs from './AboutUs';
import { addComment } from '../redux/ActionCreator';
const mapStateToprops = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };
    const MenuList = () => {
      return <Menu dishes={this.props.dishes} />;
    };
    const AboutUsPage = () => {
      return <AboutUs leaders={this.props.leaders} />;
    };
    return (
      <div>
        <BrowserRouter>
          <HeaderComponent />

          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/menu" component={MenuList} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={ContactComponent} />
            <Route path="/aboutus" component={AboutUsPage} />
            <Redirect to="/home" />
          </Switch>

          <FooterComponent />
        </BrowserRouter>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToprops, mapDispatchToProps)(Main));
