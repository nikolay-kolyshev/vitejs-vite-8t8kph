import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyled = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  *,*::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6  {
    font-size: inherit;
    font-weight: inherit;
    font-weight: inherit;
  }
`