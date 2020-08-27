import styled from "styled-components";
import { Center } from "./component";

export const StyledCenter = styled(Center)`
  box-sizing: content-box;

  max-width: var(--max-width, none);

  margin-left: auto;
  margin-right: auto;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
