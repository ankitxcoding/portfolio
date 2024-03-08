import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="m-1 p-1 text-white font-bold text-8xl">ANKIT VISHWAKARMA</h1>
        <h2 className="m-1 p-1 text-white font-semibold text-3xl">Bachelor of Technology in Computer Science & Engineering</h2>
      </div>
    </>
  );
}

export default App;
