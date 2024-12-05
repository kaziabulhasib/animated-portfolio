import TopBackground from "./components/Hero/TopBackground";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className='relative overflow-clip id="home'>
      <div className='h-screen w-screen'></div>
      <Navbar />
      <TopBackground />
    </div>
  );
}
