import { Container, Header } from 'semantic-ui-react';
import UsersContainer from './containers/UsersContainer';
import './index.css';

function App() {
  return (
    <Container>
      <Header as="h1" size="huge">
        User Profiles
      </Header>
      <UsersContainer />
    </Container>
  );
}

export default App;
