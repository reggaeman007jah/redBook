import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TrainingAndCompetence = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text}>Training and competence </Text>
        <Text style={styles.text2}>
          Only appropriately trained and competent operatives, supervisors, managers or other competent persons
          should be engaged in the assessment, design, setting up, maintaining and removing of signing, lighting,
          guarding and temporary traffic control.
      </Text>
        <Text style={styles.text2}>
          Anyone placing portable traffic signals on a public highway must have a full understanding of the
          requirements and correct operation of the signals. Reference should be made to An Introduction to the
          Use of Portable Vehicular Signals, also known as the ‘Pink Book’.
      </Text>

      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    margin: 20,
  },
  text2: {
    fontSize: 30,
    margin: 20,
    marginBottom: 50,
  }
});

export default TrainingAndCompetence;