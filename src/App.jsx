import './index.css';
import Navbar from './Navbar'
import Cerousel from './Cerousel';
import Trendingnow from './Trendingnow';
import Peoplefav from './Peoplefav';


function App(){
    return(
        <div>
            <Navbar/>
            <div className='m-3'>
               <Cerousel/>
            </div>
            <div className='m-3' >
                <Trendingnow/>
            </div>
            <div className='m-3'>
                <Peoplefav/>
            </div>
            
        </div>

    );
     
}
export default App