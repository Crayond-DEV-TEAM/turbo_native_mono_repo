import React, { memo } from 'react';
import { TouchableHighlight, View, ActivityIndicator, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { WhiteVector } from './buttonVector';

// Define types for props
type ButtonProps = {
  onPress?: () => void;
  title?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disable?: boolean;
  loading?: boolean;
  type: 'primary' | 'secondary';
};

// Functional Button component
export const ButtonComponent: React.FC<ButtonProps> = memo(
  ({ onPress, title, buttonStyle, textStyle, disable = false, loading = false, type = 'primary' }: ButtonProps) => {
    // Styled ButtonContainer for primary button
    const ButtonContainer = styled(disable || loading ? View : TouchableHighlight)<{ theme: any }>`
      background-color: ${({ theme }) => (disable ? theme.colors.disable : theme.colors.secondary)};
      padding: 10px 20px;
      border-radius: 16px;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 72px;
      border-bottom-width: ${disable ? '6px' : '6px'};
      border-top-width: ${disable ? '1px' : '1px'};
      border-left-width: ${disable ? '1px' : '1px'};
      border-right-width: ${disable ? '1px' : '1px'};
      border-color: ${({ theme }) => (disable ? theme.colors.disable : theme.colors.border.btn)};
      position: relative;
    `;

    // Styled ButtonText using styled-components
    const ButtonText = styled.Text<{ theme: any }>`
      color: ${({ theme }) => theme.colors.white};
      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.bold};
    `;

    // Styled ButtonContainer for secondary button
    const SecondaryButtonContainer = styled(disable || loading ? View : TouchableHighlight)<{ theme: any }>`
      padding: 3.5px 24px;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: ${({ theme }) => (loading ? theme.colors.disableText : 'auto')};
    `;

    // Styled ButtonText using styled-components
    const SecondaryButtonText = styled.Text<{ theme: any }>`
      color: ${({ theme }) => (disable ? theme.colors.typography.textDisable : theme.colors.typography.secondary)};
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.bold};
      text-decoration-line: underline;
      text-decoration-color: ${({ theme }) => theme.colors.typography.secondary};
    `;

    const onClick = () => {
      if (onPress) {
        onPress();
      }
    };

    const PrimaryBtn = () => {
      return (
        <ButtonContainer underlayColor='#001C64' style={buttonStyle} activeOpacity={0} onPress={onClick}>
          {loading ? (
            <ActivityIndicator animating={true} size={'small'} color={'white'} style={styles.loader} />
          ) : (
            <>
              <View style={styles?.vector1}>
                <WhiteVector />
              </View>
              <View style={styles?.vector2}>
                <WhiteVector />
              </View>
              <ButtonText style={textStyle}>{title}</ButtonText>
            </>
          )}
        </ButtonContainer>
      );
    };

    const SecondaryBtn = () => {
      return (
        <SecondaryButtonContainer
          underlayColor='rgba(255, 255, 255, 0.15)'
          style={buttonStyle}
          activeOpacity={1}
          onPress={onClick}
        >
          {loading ? (
            <ActivityIndicator animating={true} size={'small'} color={'white'} style={styles.loader} />
          ) : (
            <SecondaryButtonText style={textStyle}>{title}</SecondaryButtonText>
          )}
        </SecondaryButtonContainer>
      );
    };

    return type === 'secondary' ? <SecondaryBtn /> : <PrimaryBtn />;
  }
);

const styles = StyleSheet.create({
  vector1: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{ rotate: '180deg' }], // Changed transform syntax to an array of objects
  },
  vector2: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  loader: {
    width: 40,
    height: 40,
  },
});

ButtonComponent.displayName = 'ButtonComponent';
