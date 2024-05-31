import React, { FC, useState } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

interface MyInputFieldProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
  isError?: boolean;
  disable?: boolean;
  type?: any;
}

export const InputField: FC<MyInputFieldProps> = React.memo(
  ({ placeholder, onChangeText, value, label, isError = false, disable = false, type }) => {
    const [isFocused, setIsFocused] = useState(false);

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
      padding: 22px 24px;
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

    return (
      <>
        {label && <LabelText>{label}</LabelText>}

        <StyledInput
          onFocus={handleFocus}
          onEndEditing={handleBlur}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          editable={!disable}
          selectTextOnFocus={!disable}
          keyboardType={type}
        />
      </>
    );
  }
);

InputField.displayName = 'InputField';
