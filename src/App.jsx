import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css'
import { useState } from 'react';

function App() {

  const [Principle,setprinciple]=useState("")
  const [Rate,setRate]=useState("")
  const [year,setyear]=useState("")
  const [interest,setinterest]=useState(0)
  const [isprincipleinputvalue,setisprincipleinputvalue]=useState(false)
  const [isyearinputvalue,setisyearinputvalue]=useState(false)
  const [isRateinputvalue,setisRateinputvalue]=useState(false)

  const handlevalidation=(tag)=>{

    const{name,value}=tag
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*.?\d+$/)){
      if(name=="Principle"){
        setprinciple(value)
        setisprincipleinputvalue(false)
      }else if(name=="Year"){
        setyear(value)
        setisyearinputvalue(false)
      }else {
        setRate(value)
        setisRateinputvalue(false)
      }



//invalid

    }else{
      if(name=="Principle"){
        setprinciple(value)
        setisprincipleinputvalue(true)
    }else if(name=="Year"){
      setyear(value)
      setisyearinputvalue(true)
    }else{
      setRate(value)
      setisRateinputvalue(true)
    }
    
  }
}



  const handlecalculator=(e)=>{

    e.preventDefault()

    setinterest((Principle*year*Rate)/100)
    
  }

  const handleReset=()=>{
    setprinciple("")
    setyear("")
    setRate("")
    setinterest(0)
    setisprincipleinputvalue(false)
    setisyearinputvalue(false)
    setisRateinputvalue(false)
  }
 



  return (
    <>

    <div style={{minHeight:'100vh',width:'100%'}} className="d-flex justify-content-center align-items-center bg-primary">
          <div className="box bg-info p-5 rounded">
          <h2 className='text-danger fw-bolder' style={{textDecoration:'underline'}}>simple-interest-Calculator</h2>
          <p className='text-center'>Calculat your simple neterst with us</p>
          <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
            <h1 className='text-danger'>&#8377; {interest}</h1>
          </div>
          <div className="mt-5">
            <form className='border rounded p-3 d-flex flex-column p-3'>
                    <TextField id="Principle" name='Principle' value={Principle} label="Principle Amount" variant="outlined"  onChange={e=>handlevalidation(e.target)} />
                    {isprincipleinputvalue &&<div className='mb-2 text-danger fw-bolder'>invalid input</div>}
                    <TextField id="Year"  name='Year' value={year} label="Year" variant="filled" onChange={e=>handlevalidation(e.target)} />
                    {isyearinputvalue &&<div className='mb-2 text-danger fw-bolder'>invalid input</div>}

                    <TextField id="Rate" name='Rate' value={Rate} label="Rate of interest" variant="standard"  onChange={e=>handlevalidation(e.target)}/>
                    {isRateinputvalue && <div className='mb-2 text-danger fw-bolder'>invalid input</div>}
            </form>
          </div>
          <div className="mt-2 d-flex justify-content-between">
          <Button variant="contained" type='submit' onClick={handlecalculator} >Calculate</Button>
          <Button variant="outlined" onClick={handleReset}>Outlined</Button>
          </div>

          </div>

       </div>





    </>
  )
}

export default App
