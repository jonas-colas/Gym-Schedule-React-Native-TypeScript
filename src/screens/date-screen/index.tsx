import React, {FC, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../contants/colors';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const DateScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Date Screen</Text>
    </View>
  );
};

export default DateScreen;

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: '300',
      color: Colors.BLACK,
    },
  });
