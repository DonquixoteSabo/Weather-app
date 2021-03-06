import React from 'react';
import { connect } from 'react-redux';

import Wind from 'components/molecules/Wind';
import Humidity from 'components/molecules/Humidity';
import Visibility from 'components/molecules/Visibility';
import AirPressure from 'components/molecules/AirPressure';
import { Wrapper, Title } from './styles';

function Hightlight({ weather }) {
  const todaysWeather = weather[0];

  return (
    <>
      <Title>Today's Hightlights</Title>
      <Wrapper>
        <Wind
          wind={todaysWeather.wind}
          windDirection={todaysWeather.windDirection}
          windDirectionCompass={todaysWeather.windDirectionCompass}
        />
        <Humidity percent={todaysWeather.himidity} />
        <Visibility miles={todaysWeather.visibility} />
        <AirPressure pressure={todaysWeather.airPressure} />
      </Wrapper>
    </>
  );
}
const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};
export default connect(mapStateToProps)(Hightlight);
