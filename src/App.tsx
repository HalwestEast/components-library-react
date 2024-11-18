import "./App.css";
import { SpotifyCard } from "./components/SpotifyCard";
import flowerButterfly from "./assets/flower-butterfly.jpg";
import hills from "./assets/hills.jpg";

function App() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-[#121212]">
      <SpotifyCard title="for you" by="Nobody" img={flowerButterfly} />
      <SpotifyCard title="music that makes life worth living" by="Nobody" img={hills} />
    </div>
  );
}

export default App;
