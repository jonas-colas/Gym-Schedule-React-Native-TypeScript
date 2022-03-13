import {
  Text,
  ViewStyle,
  TextStyle,
  StyleProp,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {FC, useMemo} from 'react';
import {Colors} from '../../contants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

interface IProps {
  title: string;
  onPress?: () => void;
  disabled: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: FC<IProps> = ({
  title,
  onPress,
  disabled,
  buttonStyle,
  textStyle,
}) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {backgroundColor: disabled ? Colors.GREY : Colors.ORANGE},
        buttonStyle,
      ]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const createStyles = () =>
  StyleSheet.create({
    button: {
      width: '70%',
      alignSelf: 'center',
      padding: RFValue(5),
      alignItems: 'center',
      borderRadius: RFValue(5),
    },
    text: {
      color: Colors.WHITE,
      fontSize: RFValue(22),
    },
  });
