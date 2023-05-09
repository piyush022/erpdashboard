import Image from "next/image";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

const Signup = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [mob, setmob] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [notification, setnotification] = useState("");
  const redirect = useRouter();

  function reset() {
    setfname("");
    setlname("");
    setemail("");
    setpass("");
    setmob("");
    setStartDate(new Date());
  }

  function handlesignup(event) {
    event.preventDefault();
    const send = async () => {
      try {
        let result = await fetch("http://localhost:5000/register", {
          method: "post",
          body: JSON.stringify({
            firstname: fname,
            lastname: lname,
            email: email,
            dob: startDate,
            mobile: mob,
            password: pass,
          }),
          headers: { "Content-Type": "application/json" },
        });
        result = await result.json();
        setnotification("true");
        localStorage.setItem("user", JSON.stringify(result));
        reset();
        setTimeout(() => {
          redirect.push("/Login");
        }, 3000);
      } catch (err) {
        console.log(err);
        setnotification("false");
      }
    };
    send();
  }
  return (
    <>
      {notification == "true" ? (
        <>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Signup Successfull</strong> You will be redirected to login
            page in few seconds.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
        </>
      ) : null}
      {notification == "false" ? (
        <>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Oops something went wrong!</strong> You should check one of
            those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
        </>
      ) : null}
      <section className="signup">
        <div className="sec1">
          <Image
            width={200}
            height={90}
            src="/sbllogo.png"
            alt="stembridge labs logo"
          />
          <p>Sign up</p>
          <form>
            <input
              value={fname}
              type="text"
              placeholder="First Name"
              size="30"
              onChange={(e) => {
                setfname(e.target.value);
              }}
              required
            />
            <input
              value={lname}
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setlname(e.target.value);
              }}
              required
            />
            <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
            />

            <DatePicker
              className="datepick"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              size="30"
              required
            />
            <input
              value={mob}
              type="phone"
              placeholder="Mobile"
              onChange={(e) => {
                setmob(e.target.value);
              }}
              required
            />
            <input
              value={pass}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpass(e.target.value);
              }}
              required
            />
            <button type="submit" onClick={handlesignup}>
              Sign up
            </button>
          </form>
        </div>
        <div className="sec2">
          <img src="/transparent.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Signup;
