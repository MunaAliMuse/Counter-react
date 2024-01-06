
import { useSelector,useDispatch } from "react-redux"
import { increment,decrement,reset } from "./reducer/Counter"

function App() {
  const value = useSelector((state)=>state.Counter.Countervalue )
const dispth = useDispatch()


const handleIncrement = ()=>{
  dispth(increment())
  
  
}

const handledecrement = ()=>{
  dispth(decrement())
  
}
 const handlereset =()=>{
  dispth(reset())
 }
  return  <div className=" sm:ml-[300px] mt-7 bg-red-700 border-2 border-black hover:bg-green-800 rounded-xl sm:h-[300px] sm:w-[400px] w-[350px] ml-5  ">
    <h1 className='text-9xl font-bold text-center '>{value}</h1>
    <button onClick={handleIncrement} className='bg-blue-600 text-white text-center  sm:p-2 border-green-500 hover:bg-slate-700 border-2 mt-10 ml-5 '>increement</button>
    <button onClick={handlereset} className='bg-blue-600 text-white text-center p-2 border-red-500 hover:bg-yellow-500 border-2 ml-10'>Reset</button>

    <button onClick={handledecrement} className='bg-blue-600 text-white text-center sm:p-2 border-purple-500 hover:bg-orange-600 border-2 ml-10'>decreement</button>
    </div>
    
      
}

export default App
