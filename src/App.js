import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonArea from "./components/ButtonArea";
import Button from "./components/Button";

const btnNumbers = [0,1,2,3,4,5,6,7,8,9,"+","-","X","/","+-","C","%","=",".","+-"]


function App() {
  return (
    <Wrapper>
      <Screen />
      <ButtonArea>
      {
          btnNumbers.map((btn, i) => {
            return (
              <Button
                key={i}
                value={btn}
              />
            );
          })
        }
      </ButtonArea>
    </Wrapper>
  );
}

export default App;
