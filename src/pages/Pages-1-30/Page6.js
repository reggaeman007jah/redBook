import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Key Questions
const Page6 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>
          Other obligations not covered by this Code
        </Text>

        <Text style={styles.text3}>
          Everyone on site has a personal responsibility to behave safely. Under
          the Health and Safety at Work etc. Act 1974 (in Northern Ireland, the
          Health and Safety at Work (Northern Ireland) Order 1978), employers
          have duties to protect their employees from dangers to their health
          and safety and to protect others who might be affected by the work
          activity (for example pedestrians, cyclists, equestrians and
          motorists). These include proper arrangements for design (including
          planning and risk assessment) and management (including supervision)
          of the works. Under the Equality Act 2010, works promoters also have a
          duty to have regard for the needs of disabled people and older people
          in the planning and execution of works.
        </Text>

        <Button title="Previous" onPress={() => navigation.navigate('Page5')} />
        <Button title="Next" onPress={() => navigation.navigate('Page7')} />
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

export default Page6;
