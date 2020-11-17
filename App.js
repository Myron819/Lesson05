import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Movie, MovieList, MovieList2, MovieList3} from './Movie.js';
import {BoatList} from './Boats.js';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercises </Text>
      <Text />

      <Movie />
      <Text />

      <MovieList />
      <Text />

      <MovieList2 />
      <Text />

      <MovieList3 />
      <Text />

      <Text>GetABoat - For Sale</Text>
      <BoatList />
      <Text />
    </ScrollView>
  );
};

export default App;
