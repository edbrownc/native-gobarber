import React, {useMemo} from 'react';
import {formatRelative, parseISO} from 'date-fns';
import Background from '~/components/Background';

import {Container, Avatar, Name, Time, SubmitButton} from './styles';
import api from '~/services/api';

export default function Confirm({route, navigation}) {
  const {provider, time} = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date()),
    [time]
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? `http://10.0.3.2:3333/files/${provider.avatar.path}`
              : `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Book appointment
        </SubmitButton>
      </Container>
    </Background>
  );
}
