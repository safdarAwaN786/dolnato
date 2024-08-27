import Sidebar from "../components/Sidebar";
import FooterText from "../components/FooterText";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/BR_FL_COFFEE_01.glb");
  const handleClick = (event) => {
    console.log('Model clicked!', event.object);
  };

  return <primitive object={scene} scale={0.4} onClick={handleClick} />; // Adjusted scale
}

export default function Graphic() {
  return (
    <>
      <Sidebar currentTab={3} />
      <div className="w-full h-screen">
        <div className="sm:ms-[20%] sm:w-[80%] w-full min-h-[100vh] bg-white flex justify-center items-center">
          <div className="w-full min-h-[100vh] p-2 pb-5 relative flex flex-col items-center">
            <div className="sm:w-[70%] w-full bg-green-500 text-white p-2 mx-auto mb-10 text-center font-bold">
              DEWA HQ ENERGY MANAGEMENT CENTER PORTAL
            </div>
            <div className="w-full h-[80vh]"> {/* Adjusted height */}
              <Canvas camera={{ position: [10, 10, 10], near: 1, far: 1000 }}> {/* Adjusted camera position */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[25, 25, 25]} intensity={1} />
                <Environment preset="city" />
                <Model />
                <OrbitControls 
                  maxPolarAngle={Math.PI} // Allows full rotation vertically
                  minPolarAngle={0}       // Allows full rotation vertically
                  enableZoom={true}       // Allows zooming
                  enableRotate={true}     // Allows rotation
                  enablePan={true}        // Allows panning
                />
              </Canvas>
            </div>
            <div className="absolute mb-[10px] bottom-0">
              <FooterText/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
