import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles1.text}>Contents</Text>
        <Text style={styles1.text2}></Text>
        <Text style={styles1.text3}></Text>

        <Button
          title="Contents"
          onPress={() => navigation.navigate('IntroPage1')}
        />

        <Button
          title="Introduction"
          onPress={() => navigation.navigate('IntroPage1')}
        />
        <Button
          title="Part 1: Basic principles"
          onPress={() => navigation.navigate('Part1Menu')}
        />
        <Button
          title="Part 2: Operations"
          onPress={() => navigation.navigate('Counter')}
        />
        <Button
          title="Part 3: Equipment and vehicles"
          onPress={() => navigation.navigate('Counter')}
        />
        <Button
          title="Additional Information"
          onPress={() => navigation.navigate('Counter')}
        />
      </ScrollView>
    </View>
  );
};

const styles1 = StyleSheet.create({
  text: {
    fontSize: 50,
    margin: 20,
  },
  text2: {
    fontSize: 30,
    margin: 20,
    // marginBottom: 50,
  },
  text3: {
    fontSize: 20,
    margin: 20,
    marginBottom: 50,
  },
  text4: {
    fontSize: 12,
    margin: 20,
    marginBottom: 50,
  },
});

export default HomeScreen;
