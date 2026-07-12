import Cards from './card.jsx';
export default function App(){
  return <>
  <h1>Best Sunrise Points!</h1>
  <div id='container'>
  <Cards msg="Tiger Hill, Darjeeling, West Bengal" data=" Famous for panoramic views of Kanchenjunga and Mount Everest, Tiger Hill is best visited from April to June or post-monsoon (October–November). The first rays illuminate the snow-capped peaks, creating a surreal spectacle for photographers and trekkers alike"/>
  <Cards msg="Sandakphu, West Bengal" data="At 3,636 meters, this trek offers views of four of the world’s five highest peaks, including Everest, making it a paradise for sunrise enthusiasts"/>
  <Cards msg="Pangong Tso, Ladakh" data="A high-altitude lake where the sunrise reflects off the tranquil waters, creating a magical mirror effect "/>
  <Cards msg="Nubra Valley, Ladakh" data="Rugged mountains and desert landscapes provide a dramatic backdrop for early morning light"/>
  </div>
  </>
 
  }