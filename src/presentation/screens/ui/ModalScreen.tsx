import React, {useContext} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Modal, Platform, View} from 'react-native';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const {colors} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: colors.background,
          }}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="Modal Content" safe />
          </View>

          <View style={{flex: 1}} />

          <Button
            text="Cerrar Modal"
            onPress={() => setIsVisible(false)}
            styles={{
              height: Platform.OS === 'android' ? 60 : 80,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
