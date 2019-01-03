import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPeople } from '../selectors/people';

class People extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
  };

  listOfPeople = () =>
    this.props.people.map(person => (
      <div className="App-box" key={person.id}>
        {person.name}
      </div>
    ));

  render() {
    return <div>{this.listOfPeople()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    people: getPeople(state),
  };
};

export default connect(mapStateToProps)(People);
