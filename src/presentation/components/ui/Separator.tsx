import React, {useContext} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: colors.cardBackground,
      }}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '80%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 8,
          },
          style,
        ]}>
        <Text>Separator</Text>
      </View>
    </View>
  );
};
