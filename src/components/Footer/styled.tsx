import { FOOTER_HEIGHT } from "consts";
import colors from "consts/colors";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: #fff;
  height: ${FOOTER_HEIGHT};
  font-size: 1rem;
  > :last-child {
    cursor: pointer;
  }
`