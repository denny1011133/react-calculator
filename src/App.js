import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonArea from "./components/ButtonArea";
import Button from "./components/Button";



function App() {
  return (
    <Wrapper>
      <Screen />
      <ButtonArea>
        <Button />
      </ButtonArea>
    </Wrapper>
  );
}

export default App;
