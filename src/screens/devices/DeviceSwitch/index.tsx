import React, {useCallback} from 'react';

import SwitchButton from '../../../components/SwitchButton';
import {switchDevice} from '../../../store/deviceSlice';
import {useAppDispatch} from '../../../store/hooks';

import styles from './styles';

interface IDeviceSwitch {
  item: any;
}

export const DeviceSwitch: React.FC<IDeviceSwitch> = ({item}) => {
  const dispatch = useAppDispatch();

  const handleSwitch = useCallback(
    () => dispatch(switchDevice(item.id)),
    [dispatch, item.id],
  );

  return (
    <SwitchButton
      title={item.device}
      subtitle={item.room}
      isEnabled={item.enabled}
      setIsEnabled={handleSwitch}
      style={styles.switchButtonsSpacing}
    />
  );
};
