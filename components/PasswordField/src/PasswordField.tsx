import React, { FC, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { EyeClose, EyeOpen, PencilIcon, ConfirmIcon } from './icons';

interface MyInputFieldProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
  isError?: boolean;
  disable?: boolean;
  isConfirm?: boolean;
}

export const PasswordField: FC<MyInputFieldProps> = React.memo(
  ({ placeholder, onChangeText, value, label, isError = false, disable = false, isConfirm = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [visible, setVisible] = useState(true);

    const StyledInput = styled(TextInput)`
      border-width: ${isFocused || isError ? '2px' : disable ? '0px' : '0px'};
      border-radius: 5px;
      background-color: ${({ theme }) => (disable ? theme.colors.disableInput : theme.colors.white)};
      height: 72px;
      width: 100%;
      border-radius: 16px;
      font-family: ${({ theme }) => theme.fonts.regular};
      color: ${({ theme }) => (isError ? theme.colors.negative : theme.colors.typography.secondary)};
      font-size: 18px;
      padding: 22px 50px;
      margin-top: -16px;
      border-color: ${({ theme }) =>
        isFocused ? theme.colors.accent : isError ? theme.colors.negative : theme.colors.secondary};
    `;

    // Styled ButtonText using styled-components
    const LabelText = styled.Text<{ theme: any }>`
      color: ${({ theme }) => theme.colors.typography.secondary};
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.regular};
      margin: 0px;
    `;

    const handleFocus = () => {
      if (!disable) setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };
    const PasswordContainer = styled(View)<{ theme: any }>`
      position: relative;
    `;

    const StartIcon = styled(PencilIcon)`
      position: absolute;
      left: 18px;
      top: 10px;
    `;

    const EndIcon = styled(TouchableOpacity)`
      position: absolute;
      right: 18px;
      top: 10px;
    `;

    const Confirm = styled(ConfirmIcon)`
      position: absolute;
      right: 18px;
      top: 10px;
    `;

    return (
      <>
        {label && <LabelText>{label}</LabelText>}

        <PasswordContainer>
          <StyledInput
            onFocus={handleFocus}
            onEndEditing={handleBlur}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            editable={!disable}
            selectTextOnFocus={!disable}
            secureTextEntry={visible}
          />
          <StartIcon />
          {isConfirm ? (
            <Confirm />
          ) : (
            <EndIcon onPress={() => setVisible(!visible)}>{visible ? <EyeClose /> : <EyeOpen />}</EndIcon>
          )}
        </PasswordContainer>
      </>
    );
  }
);

PasswordField.displayName = 'InputField';
