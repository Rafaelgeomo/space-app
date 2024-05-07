import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackground from "./assets/banner.png";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <Container>
        <BarraLateral />
        <Banner backgroundImage={bannerBackground} />
      </Container>
    </FundoGradiente>
  );
}

export default App;
