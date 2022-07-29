import styled from "styled-components";

export const ContainerCounter = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #add8e6;
  padding: 5rem 5rem;
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;
