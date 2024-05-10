import styled from "styled-components";
import tags from "./tags.json";

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <TagTitulo> Busque por tags:</TagTitulo>
      <Div>
        {tags.map((tag) => (
          // Aqui, usamos o método .map() de um array para transformar cada item do array (neste caso, cada tag) em um componente React (). Isso é uma técnica comum em React para renderizar listas.
          <Tag key={tag.id} onClick={() => setTag(tag.tag)}>
            {tag.titulo}{" "}
          </Tag>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;
