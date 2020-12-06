import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Advance signing
const Page21 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Advance signing</Text>

        <Text style={styles.text3}>Signing of the works Italic</Text>
        <Text style={styles.text3}>
          It is important that the distances, including safety zone dimensions
          are determined before starting to set the signs out. From the table
          inside the back cover select the size and distance for the advance
          signs. The basic site layout for works on a single carriageway road
          with a works vehicle present is shown on page 21. If there is limited
          visibility on the approach to the proposed works site, e.g. on a bend,
          on a dip in the road, or on the brow of a hill, you must provide extra
          advance signs. These extra signs will need to be placed first.
        </Text>
        <Text style={styles.text3}>
          Where there is a grass verge the signs should normally be placed
          there. Placing signs in the footway is permitted, but they must be
          positioned so as to minimise inconvenience or hazard to pedestrians,
          with particular consideration given to those with visual impairments,
          pushchairs, wheelchairs and mobility scooters. A minimum usable
          footway width of 1.5 metres should be maintained where possible. See
          page 28 for details.{' '}
        </Text>
        <Text style={styles.text3}>
          The lower edge of all signs should be no less than 300 mm from ground
          level, and care should be taken that signs are level, particularly if
          the ground is uneven.
        </Text>
        <Text style={styles.text3}>
          Warning: In no circumstances must the footway width be reduced below
          1.0 metres. Where the minimum footway width of 1.0 m cannot be
          maintained, you must consult your supervisor, manager or other
          competent person.
        </Text>
        <Text style={styles.text3}>
          Caution: Consult your supervisor, manager or other competent person if
          the works are going to make it impossible for drivers to comply with a
          permanent traffic sign. Such signs might need to be covered or
          relocated; the highway authority must be consulted before this is
          done.{' '}
        </Text>
        <Text style={styles.text3}>
          Road works ahead – the first sign to be seen by approaching traffic.
          Its size, the minimum distance from the start of the lead-in taper,
          and clear visibility distance will vary according to the type of road
          and its speed limit – see table inside the back cover. The range of
          distances is given to allow the sign to be placed in the most
          convenient position, bearing in mind the available space and
          visibility for drivers. Do not simply choose the minimum distance –
          assess each site carefully.
        </Text>
        <Text style={styles.text3}>
          Road narrows ahead – sign warns the driver which side of the
          carriageway is obstructed. Place it between the ‘Road works ahead’
          sign and the beginning of the lead-in taper. Make sure that the
          correct sign (i.e. narrows on left or right) is used.
        </Text>
        <Text style={styles.text3}>
          Traffic control warning signs – include advance signing for any
          traffic control systems in use.
        </Text>
        <Text style={styles.text3}>
          On roads with speed limits of 50 mph or more, the above advance signs
          should have supplementary distance plates giving the distance to the
          works in yards or miles (not metres).
        </Text>
        <Text style={styles.text3}>
          Directional arrow – place ‘Keep right’ or ‘Keep left’ signs as
          appropriate at the beginning and end of the lead-in taper of cones.
          These signs must be the same size as the ‘Road works ahead’ sign. Make
          sure that the signs point in the correct direction.
        </Text>
        <Text style={styles.text3}>
          Warning: Do not place ‘Keep left’ or ‘Keep right’ sign frames on their
          sides to make them point in the correct direction, as this could cause
          a hazard to road and footway users, and may cause confusion. These
          signs must not be used for directing pedestrians.
        </Text>
        <Text style={styles.text3}>
          Advance signs should be placed so that they:
        </Text>
        <Text style={styles.text3}>- are in the correct sequence;</Text>
        <Text style={styles.text3}>
          - are within the correct distances as shown in table inside back
          cover;
        </Text>
        <Text style={styles.text3}>- can be clearly seen;</Text>
        <Text style={styles.text3}>
          - cause minimum inconvenience to road and footway users;
        </Text>
        <Text style={styles.text3}>
          - are at a minimum risk of being struck by vehicles; and
        </Text>
        <Text style={styles.text3}>
          - cannot be obscured by parked vehicles
        </Text>
        <Text style={styles.text3}>
          Fixing of signing, lighting and guarding Italic
        </Text>
        <Text style={styles.text3}>
          Signing, lighting and guarding equipment must be fixed to prevent it
          being blown over or out of position by wind or passing vehicles. The
          use of equipment with built-in weights is recommended. Alternatively
          you may add appropriate weights e.g. sacks containing suitable
          granular material placed at low level.{' '}
        </Text>
        <Text style={styles.text3}>
          Warning: Do not use barrels, kerbstones, spoil, road pins or similar
          objects for the purpose of weighting or securing road signs and
          barriers – they could create a danger for highway users if struck by a
          vehicle.
        </Text>
        <Text style={styles.text3}>Additional requirements Italic</Text>
        <Text style={styles.text3}>
          Sometimes you might have to duplicate the warning signs on both sides
          of the road. An example of this would be where signs on the left-hand
          side become obscured by heavy traffic. On dual carriageway roads, the
          warning signs may need to be duplicated in the central reservation –
          consult your supervisor, manager or other competent person.
        </Text>
        <Text style={styles.text3}>
          Warning: You should only cross a live carriageway on foot when traffic
          flows are low enough to regularly produce sufficient gaps between
          vehicles to allow time to cross safely. For dual carriageways, the
          need to place signs in the central reservation must be assessed before
          you proceed and you should consult your supervisor, manager or other
          competent person.{' '}
        </Text>
        <Text style={styles.text3}>
          The road width and volume of traffic at the works site might make
          traffic control necessary. See page 53 for details of which type of
          control is appropriate.
        </Text>
        <Text style={styles.text3}>
          Signs should be set out for traffic approaching from all directions.
        </Text>
        <Text style={styles.text3}>
          Before any works equipment is placed in the carriageway, advance
          signing must be provided. (For exceptions associated with works
          between parked vehicles see page 37).{' '}
        </Text>
        <Text style={styles.text3}>
          If you place a pedestrian walkway in the carriageway, or create
          obstructions such as spoil or plant outside the working space, sign,
          light and guard them separately, and to the same standard.
        </Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page20')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page22')} />
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

export default Page21;
