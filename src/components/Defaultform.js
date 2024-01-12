import React ,{useState}from 'react'

export default function Defaultform({registerd}) {
    //let [registerx , setRegister] = useState(Registerd)


if (registerd==true) {
    return(
    <div className='form'>
    <h2>Login</h2>
    <div className='mb-3'>
        <lavel className='form-label'>UserName</lavel>
        <input type='text' className='form-control' placeholder="Enter Username"/>
    </div>
    <div className='mb-3'>
        <lavel className='form-label'>Password</lavel>
        <input type='text' className='form-control' placeholder="Enter password"/>
    </div>
    <button className='btn btn-success'>Login</button>
</div>
)
}else{
    return(
    <div className='form'>
    <h2>Registerd</h2>
    <div className='mb-3'>
        <lavel className='form-label'>UserName</lavel>
        <input type='text' className='form-control' placeholder="Enter Username"/>
    </div>
    <div className='mb-3'>
        <lavel className='form-label'>Password</lavel>
        <input type='text' className='form-control' placeholder="Enter password"/>
    </div>
    <div className='mb-3'>
        <lavel className='form-label'>Confirm-password</lavel>
        <input type='text' className='form-control' placeholder="Repeat password"/>
    </div>
    <button className='btn btn-primary'>Register</button>
</div>
    )
}
  return (
    <div>
<div className='form'>
    <h2>Login</h2>
    <div className='mb-3'>
        <lavel className='form-label'>UserName</lavel>
        <input type='text' className='form-control' placeholder="Enter Username"/>
    </div>
    <div className='mb-3'>
        <lavel className='form-label'>Password</lavel>
        <input type='text' className='form-control' placeholder="Enter password"/>
    </div>
    <button className='btn btn-success'>Login</button>
</div>

<br/>

<div className='form'>
    <h2>Registerd</h2>
    <div className='mb-3'>
        <lavel className='form-label'>UserName</lavel>
        <input type='text' className='form-control' placeholder="Enter Username"/>
    </div>
    <div className='mb-3'>
        <lavel className='form-label'>Password</lavel>
        <input type='text' className='form-control' placeholder="Enter password"/>
    </div>
    <div className='mb-3'>
        <lavel className='form-label'>Confirm-password</lavel>
        <input type='text' className='form-control' placeholder="Repeat password"/>
    </div>
    <button className='btn btn-primary'>Register</button>
</div>
    </div>
  )
}
