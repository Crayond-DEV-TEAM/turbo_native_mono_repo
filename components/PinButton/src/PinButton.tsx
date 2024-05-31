import React, { memo } from 'react';
import { TouchableHighlight, StyleSheet, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { BackSpaceIcon } from './backspace';
// Define types for props
type ButtonProps = {
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  text?: string;
  isClear?: boolean;
};

// Functional Button component
export const PinButton: React.FC<ButtonProps> = memo(({ onPress, text, buttonStyle, isClear }: ButtonProps) => {
  // Styled ButtonContainer for primary button
  const ButtonContainer = styled(TouchableHighlight)<{ theme: any }>`
    background-color: ${({ theme }) => (isClear ? 'transparent' : theme.colors.white)};
    padding: 10px 20px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
  `;

  // Styled ButtonText using styled-components
  const ButtonText = styled.Text<{ theme: any }>`
    color: ${({ theme }) => theme.colors.typography.secondary};
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.medium};
  `;

  const onClick = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <ButtonContainer
      underlayColor='rgba(255, 255, 255, 0.50)'
      style={buttonStyle}
      activeOpacity={0.8}
      onPress={onClick}
    >
      {isClear ? (
        <BackSpaceIcon />
      ) : (
        <>
          <ButtonText>{text}</ButtonText>
        </>
      )}
    </ButtonContainer>
  );
});

PinButton.displayName = 'PinButton';
