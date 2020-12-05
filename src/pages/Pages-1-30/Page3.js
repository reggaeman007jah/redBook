import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Key Questions
const Page3 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Purpose of this Code of Practice</Text>
        <Text style={styles.text3}>
          This Code of Practice (referred to from here on as the Code) is
          intended to help you to safely carry out signing, lighting and
          guarding of street works and road works on all highways and roads,
          except motorways and any dual carriageways with a speed limit of 50
          mph or more. This Code is directed at operatives, supervisors,
          managers, planners and designers who are responsible for making sure
          that all street and road works are safe for both operatives and the
          public. Road users including pedestrians, cyclists and equestrians
          (horse riders) should not be put at risk, and should be able to see
          the extent and nature of any obstruction well before they reach it.
        </Text>
        <Text style={styles.text3}>
          You must pay particular attention to the needs of disabled people and
          should also consider other vulnerable groups such as elderly people,
          children and those with push chairs. This Code will help you to do
          this.
        </Text>

        <Button title="Previous" onPress={() => navigation.navigate('Page2')} />
        <Button title="Next" onPress={() => navigation.navigate('Page4')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 50,
    margin: 20,
  },
  text2: {
    fontSize: 30,
    margin: 20,
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

export default Page3;
