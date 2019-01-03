import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { applyFilter } from '../actions/people';

class Filter extends Component {
  static propTypes = {
    apply: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.props.apply(e.target.value);
  };

  render() {
    return (
      <div className="App-box">
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      apply: applyFilter,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Filter);
