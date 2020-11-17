import React from 'react';
import {View, Text, Image} from 'react-native';

const movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = ['Doctor Sleep', 'Midway'];

const MOVIES_DATA2 = [
  {
    title: 'Doctor Sleep',
    year: '2019',
  },
  {
    title: 'Midway',
    year: '2019',
  },
];

const MOVIES_DATA3 = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
      </View>
    );
  }
}

class Movie3 extends React.Component {
  render() {
    return (
      <View>
        {/*<Text>{this.props.num}</Text>*/}
        <Text>{}</Text>
        <Text>{this.props.title}</Text>
        <Text>{this.props.year}</Text>
        <Image source={this.props.poster} />
      </View>
    );
  }
}

const MovieList = () => {
  return MOVIES_DATA.map((title) => <Text>{title} </Text>);
};

const MovieList2 = () => {
  return MOVIES_DATA2.map((movie) => {
    return <Movie title={movie.title} year={movie.year} />;
  });
};

const MovieList3 = () => {
  return MOVIES_DATA3.map((movie) => {
    return (
      <Movie3 title={movie.title} year={movie.year} poster={movie.poster} />
    );
  });
};

export {Movie, MovieList, MovieList2, MovieList3};
