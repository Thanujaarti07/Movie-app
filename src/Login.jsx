
function Login() {
  return (
    <div className=" d-flex justify-content-center ">
        <form className=" p-5 bg-dark" style={{width:"500px", height:"400px",boxShadow: "0 0 20px 4px darkviolet", borderRadius:"20px"}}>
           <div className="mb-3 display-5">LOGIN</div>
           <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="email" className="form-control "/>
           </div>
           <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control "/>
           </div>
           <button type="submit" className="btn btn-color text-light">Submit</button>
        </form>
    </div>
  )
}

export default Login