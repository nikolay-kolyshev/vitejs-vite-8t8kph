import {StyledProvider} from "./styles/StyledProvider";
import {Header} from "./UI-components/Header/Header";

function App() {
  return (
      <StyledProvider>
          <div>
              <Header/>
          </div>
      </StyledProvider>
  )
}

export default App
