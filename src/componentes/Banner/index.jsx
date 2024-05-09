import styled from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${(props) =>
    `url(${props.$backgroundImage})`}; /*isso é JavaScript puro no meio do CSS! O que estamos fazendo aqui é pegar a propriedade $backgroundImage (que você passaria para o componente) e usar como URL para a imagem de fundo. */
  flex-grow: 1; /*isso faz com que o componente ocupe todo o espaço disponível em um container que usa flexbox, caso haja espaço extra. */
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

const Banner = ({ backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>
        A galeria mais completa de fotos do espaço!
      </TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
