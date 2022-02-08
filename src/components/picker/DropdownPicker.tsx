import _ from 'lodash';
import React, {useState} from 'react';
import {Colors, Picker, Typography} from 'react-native-ui-lib';
import ArrowDown from '../../resource/icons/arrow-down.svg';
import CloseIcon from '../../resource/icons/close.svg';

interface IDropdownPicker {
  placeholder?: string;
  title?: string;
  value: string;
  onChange: (value: string) => void;
  options: IOption[];
}

interface IOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export const DropdownPicker = ({
  placeholder = 'Select',
  title = 'Options',
  value,
  onChange,
  options = [],
}: IDropdownPicker) => {
  const [selected, setSelected] = useState<IOption>(
    options.find(i => i.value === value) || options[0],
  );
  function handleOnChange(changed: IOption) {
    setSelected(changed);
    onChange(changed.value);
  }
  return (
    <Picker
      placeholder={placeholder}
      floatingPlaceholder
      floatingPlaceholderStyle={{color: Colors.text}}
      style={{color: Colors.text}}
      value={selected}
      onChange={handleOnChange}
      topBarProps={{
        title,
        titleStyle: {color: Colors.text, ...Typography.h5},
        cancelIcon: CloseIcon,
      }}
      rightIconSource={ArrowDown}
      enableModalBlur={true}
      pickerModalProps={{overlayBackgroundColor: Colors.dark}}
    >
      {_.map(options, option => (
        <Picker.Item
          key={option.value}
          value={option}
          disabled={option.disabled}
          labelStyle={{color: Colors.text}}
        />
      ))}
    </Picker>
  );
};
