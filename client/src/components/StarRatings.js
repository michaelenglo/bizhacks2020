import React, { Component } from 'react';
import { Icon, Text, Pane } from 'evergreen-ui';

const styles = {
  star: {
    fontSize: '12px',
    color: '#ffd700',
  },
  starDisabled: {
    fontSize: '12px',
    color: '#dddddd',
  },
  ratingsFraction: {
    marginLeft: '2px',
    fontSize: '10px',
    width: '50px',
  },
  container: {
    width: '200px',
  },
  center: {
    margin: 'auto',
  },
  starJumbo:  {
    fontSize: '20px',
  }
};

class StarRatings extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const stars = [];

    for (let i = 1; i <= this.props.ratings; i++) {
      stars.push(<Icon icon="star" size="14px" key={i} color="#fecf0a" />)
    }

    for (let i = this.props.ratings + 1; i <= 5; i++) {
      stars.push(<Icon icon="star" size="14px" key={i} color="gray" />);
    }

    return (
      <Pane>
        {stars}
        {
          !this.props.justStars
          ? <Text marginLeft="10px">({this.props.reviews})</Text>
          : null
        }
      </Pane>
    );
  }
}

export default StarRatings;