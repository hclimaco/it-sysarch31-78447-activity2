import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content";

const students = [
  { id: 1, name: 'Max Verstappen', email: 'max@verstappen.com', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png' },
  { id: 2, name: 'Sergio Perez', email: 'sergio@perez.com', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png' },
  { id: 3, name: 'Charles Leclerc', email: 'charles@leclerc.com', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png' },
  { id: 4, name: 'Carlos Sainz', email: 'carlos@sainz.com', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png' },
  { id: 5, name: 'Oscar Piastri', email: 'oscar@piastri.com', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png' },
]; 
function App() {
  return(
    <div className="main">
    <Header></Header>
    <Content students={students} />
    <Footer></Footer>
    </div>
  );
}

export default App
