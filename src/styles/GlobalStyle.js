import styled from "styled-components";

export const ButtonDefault = styled.button`
  filter: drop-shadow(0px 2px 15px #a3a3a3);
  margin-top: 2rem;
  border-radius: 7px;
  padding: 1rem 2rem;
  border: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    transform: scale(1.2);
  }

  @media screen and (max-width: 786px) {
    padding: 1rem 1.5rem;
  }
`;
