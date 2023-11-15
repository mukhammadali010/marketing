import { YMaps, Map } from "react-yandex-maps";

import { Container } from "./style";

const Yandex = () => {
  return (
    <Container>
      <YMaps>
        <div className="map">
          <Map defaultState={{ center: [41.311081, 69.240562], zoom: 13 }} />
        </div>
      </YMaps>
    </Container>
  );
};

export default Yandex;
