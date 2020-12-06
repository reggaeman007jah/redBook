import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Responsibilities
const Page10 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Responsibilities</Text>

        <Text style={styles.text3}>It is your responsibility to: </Text>
        <Text style={styles.text3}>
          ensure that the correct procedures have been followed for works that
          involve the need for prior consultation, consent or agreement (e.g.
          highway closures, working in the vicinity of railways and/or tramways,
          etc);{' '}
        </Text>
        <Text style={styles.text3}>
          ensure that before you start that a site specific risk assessment has
          been carried out, paying particular attention to the requirements of
          highway users, including pedestrians and vulnerable users such as
          disabled people. If circumstances change, you should consider whether
          the risk assessment needs revising;{' '}
        </Text>
        <Text style={styles.text3}>
          ensure that before you start that the works site layout has been
          planned, necessary equipment has been identified and that you know how
          you will set the site out;{' '}
        </Text>
        <Text style={styles.text3}>
          understand and implement pre-planned site safety requirements before
          starting the works;{' '}
        </Text>
        <Text style={styles.text3}>
          sign, light, guard and maintain your works safely at all times;{' '}
        </Text>
        <Text style={styles.text3}>
          ensure that your works remain compliant and safe as works progress or
          following any alteration;{' '}
        </Text>
        <Text style={styles.text3}>
          ensure that the safety of yourself and others who pass near or through
          the works;{' '}
        </Text>
        <Text style={styles.text3}>
          consult your supervisor, manager or other competent person immediately
          if you are unsure about any requirements contained in your work
          instruction; and{' '}
        </Text>
        <Text style={styles.text3}>
          ensure that the work team understands all key safety issues and the
          local site risk assessment related to the activity.{' '}
        </Text>
        <Text style={styles.text3}>
          Warning: Always consult your supervisor, manager or other competent
          person if you are in any doubt about compliance with this Code or if
          you are concerned about safety.{' '}
        </Text>

        <Button title="Previous" onPress={() => navigation.navigate('Page9')} />
        <Button title="Next" onPress={() => navigation.navigate('Page11')} />
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

export default Page10;
