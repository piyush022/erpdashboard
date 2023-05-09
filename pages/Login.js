import Image from "next/image";
import { useState, useEffect } from "react";

const Login = () => {
  const [pass, setpass] = useState("");
  const [mob, setmob] = useState("");

  function handleform(event) {
    event.preventDefault();
  }
  return (
    <>
      <section className="signup">
        <div className="sec1">
          <Image
            width={200}
            height={90}
            src="/sbllogo.png"
            alt="stembridge labs logo"
          />
          <p>Login</p>
          <form onSubmit={handleform}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpass(e.target.value);
              }}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="sec2">
          <img src="/transparent.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Login;
