import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./reducer";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('props', this.props)
    return <div>Products</div>;
  }
}
const mapStateToProps = state => {
  console.log("state", state);
};
export default connect(
  mapStateToProps,
  { ...actions }
)(Products);
