import { CommentsSection } from "./components/CommentsSection/CommentsSection";
import { Footer } from "./components/Footer/Footer";
import '../src/index.css'

function App() {
  return (
    <div className="body-container">
      <CommentsSection />
      <Footer />
    </div>
  );
}

export default App;