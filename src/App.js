import Wrapper from "./components/Wrapper";
import Display from "./components/Display";
import ButtonArea from "./components/ButtonArea";
import Button from "./components/Button";

function App() {
  return (
    <Wrapper>
      <Display />
      <ButtonArea>
        <Button />
      </ButtonArea>
    </Wrapper>
  );
}

export default App;
