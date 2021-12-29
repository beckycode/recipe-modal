import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { RecipeList } from "./components/RecipeList";
import ModalProvider from "./context/ModalContext";
import RecipeProvider from "./context/RecipeContext";

function App() {
  return (
    <>
      <RecipeProvider>
        <ModalProvider>
          <Header></Header>
          <RecipeList></RecipeList>
          <Modal></Modal>
        </ModalProvider>
      </RecipeProvider>
    </>
  );
}

export default App;
