// import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import { ButtonComponent } from 'components-button';
import { InputField } from 'components-inputfield';
import { PasswordField } from 'components-passwordfield';
import { PinButton } from 'components-pinbutton';

import { ScrollView } from 'react-native';

//  background-color: #454445;

const Container = styled.View`
  flex: 1;
  padding: 30px;
  gap: 20px;
`;

const Text = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const WelcomeScreen = () => {
  return (
    <ScrollView>
      <Container>
        <PinButton text={'1'} />
        <PinButton isClear={true} />
        <PasswordField label='Password' placeholder='Enter your password' />
        <PasswordField label='Password' isError={true} placeholder='Enter your password' />
        <PasswordField label='Password' isConfirm={true} placeholder='Enter your password' />

        <InputField label='Email' placeholder='Enter your email' />
        <InputField label='Email' isError={true} placeholder='Enter your email' />
        <InputField label='Email' disable={true} placeholder='Enter your email' />

        <ButtonComponent title='Get Started' />
        <ButtonComponent disable={true} title='Get Started' />
        <ButtonComponent loading={true} />
        <ButtonComponent type='secondary' title='Create New Account' />
        <ButtonComponent type='secondary' disable={true} title='Create New Account' />
        <ButtonComponent type='secondary' loading={true} title='Create New Account' />
      </Container>
    </ScrollView>
  );
};
