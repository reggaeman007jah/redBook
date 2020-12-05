import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Part1Menu = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Part 1: Basic principles</Text>
      <Button
        title="Using this Code"
        onPress={() => navigation.navigate('UsingThisCode')}
      />
      <Button
        title="Responsibilities"
        onPress={() => navigation.navigate('Responsibilities')}
      />
      <Button
        title="Training and competence "
        onPress={() => navigation.navigate('TrainingAndCompetence')}
      />
      <Button
        title="Planning"
        onPress={() => navigation.navigate('Planning')}
      />
      <Button
        title="Risk assessment"
        onPress={() => navigation.navigate('RiskAssessment')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    margin: 50,
  }
});

export default Part1Menu;