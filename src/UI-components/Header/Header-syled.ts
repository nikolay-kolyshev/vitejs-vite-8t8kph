import styled from "styled-components";
import {deviceNavigation} from "../../styles/devices";

const HeaderZIndex = 100000;

const Wrapper = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${HeaderZIndex};
    background-color: ${({theme}) => theme.colors.typography};
  
    height: 103px;
  
    ${deviceNavigation.mobile} {
        height: 72px;
    }
`;

const Title = styled.h1`
    font-weight: 500;
    font-size: 36px;

    ${deviceNavigation.mobile} {
      font-size: 20px;
    }
`

export const Styled = {
    Wrapper,
    Title,
}