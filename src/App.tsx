import styled from "styled-components";
import Greeter from "./components/test/Greeter";
import withRedColor from "./components/test/withRedColor";


const StyledContainer = styled.div`
  display:grid;
  grid-template-columns:3fr 1fr;
  gap:30px;
`;

const App = () => {

  const GreeterWithRedColor = withRedColor(Greeter);

  return (
    <div>
      <GreeterWithRedColor name="kh" />
    </div>
  );
};




export default App;