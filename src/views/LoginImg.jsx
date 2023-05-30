import Login from "../components/Login";
import loginImg from "../assets/login.jpg"

export default function LoginImg() {
  return (
    <>
      <div className="grid grid-cols-2 mt-10">
        <Login/>
          <img src={loginImg} alt="login" className="mt-32"/>
      </div>
    </>
  )
}