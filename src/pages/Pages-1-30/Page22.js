import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Coned area
const Page22 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Coned area</Text>

        <Text style={styles.text3}>Cones and warning lights Italic</Text>
        <Text style={styles.text3}>
          For the minimum size of cones and their placement in lead-in tapers,
          exit tapers, and safety zones, refer to the table inside the back
          cover. The retroreflective sleeves of cones must be kept clean.
          Damaged cones/sleeves must not be used.{' '}
        </Text>
        <Text style={styles.text3}>
          All street and road works on roads with a speed limit of 40 mph or
          more must have warning lights (formerly known as road danger lamps)
          illuminated in poor visibility or during the hours of darkness. If
          your risk assessment requires it, warning lights should also be used
          on lower-speed roads. Steady warning lights can be used on all lit or
          unlit roads regardless of the speed limit. Where street lighting is
          present and illuminated, and where the speed limit is 40 mph or less,
          flashing warning lights are permitted as an alternative. See table on
          page 97.
        </Text>
        <Text style={styles.text3}>Lead-in taper Italic</Text>
        <Text style={styles.text3}>
          The recommended lead-in taper is given in the table inside the back
          cover. Sometimes it might not be practicable to provide the full
          taper. If this happens on congested roads with speed limits of 30 mph
          or less, shorter lengths of taper may be used. Reduced tapers should
          always be as long as permitted under the circumstances. However, they
          must not be reduced to less than 45º unless there are restrictions
          associated with parked vehicles (see page 37.)
        </Text>
        <Text style={styles.text3}>
          Caution: Where reduced taper lengths are used, the siting distance (D)
          of the first sign in advance of the taper must be no less than 20
          metres.{' '}
        </Text>
        <Text style={styles.text3}>Traffic barrier Iyalic</Text>
        <Text style={styles.text3}>
          When a traffic lane is closed for fixed (i.e. not short duration or
          mobile) works to take place, a traffic barrier with a retroreflective
          red and white barrier sign should be placed across the lane as shown
          in the layout diagrams.
        </Text>
        <Text style={styles.text3}>Site layout Italic</Text>
        <Text style={styles.text3}>
          You must include the works area, working space and safety zone in the
          area to be marked off with cones, and/or barriers. Warning lights
          should be placed where necessary (see page 94).{' '}
        </Text>
        <Text style={styles.text3}>
          You must provide safety zones when either:
        </Text>
        <Text style={styles.text3}>- operatives are present; or</Text>
        <Text style={styles.text3}>
          - a pedestrian walkway is located in the carriageway.
        </Text>
        <Text style={styles.text3}>Working space Italic</Text>
        <Text style={styles.text3}>
          The working space includes the works area (e.g. the excavation or
          chamber opening) and the space around the works area where it is
          permitted to store tools, excavated material, equipment and plant. You
          must leave enough working space to ensure that movement and operation
          of plant (e.g. swinging of buckets or counterweights) is clear of
          passing traffic and does not encroach into the safety zone or any
          adjacent footway, walkway or cycle route. Where materials or welfare
          facilities cannot be accommodated within the site, the location and
          arrangement of the storage area must be agreed with the highway
          authority
        </Text>
        <Text style={styles.text3}>Safety zone Italic</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>
        <Text style={styles.text3}>October</Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page21')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page23')} />
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

export default Page22;
