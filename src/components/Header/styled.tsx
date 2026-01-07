import styled from "styled-components";
import colors from "consts/colors";
import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from "consts";

export const HeaderWrapper = styled.div`
height: ${HEADER_HEIGHT}px;
color: ${colors.white};
width: 100%;
background-color: ${colors.primary};
padding: 14px 20px;
display:flex;
z-index: ${Z_INDEX_LEVEL_2};
align-items: center;
`