import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Sidebar = () => {
  const [width, setwidth] = useState("sidebar");

  function movesidebar() {
    if (width == "sidebar") {
      setwidth("minsidebar");
    } else {
      setwidth("sidebar");
    }
  }

  return (
    <>
      {width == "sidebar" ? (
        <>
          {" "}
          <section className={width}>
            <GiHamburgerMenu className="ham" onClick={movesidebar} />

            <ul className="first">
              <li>Navigation</li>
              <li>Home</li>
              <li>Dashboard</li>
            </ul>
            <ul className="second">
              <li>Components</li>
              <li>Student</li>
              <li>Transport</li>
              <li>Fees</li>
              <li>Front Office</li>
              <li>Stock</li>
              <li>Account</li>
              <li>Medical</li>
              <li>Gallery</li>
              <li>Exams</li>
              <li>Notice</li>
              <li>Timetable</li>
            </ul>
          </section>
        </>
      ) : (
        <GiHamburgerMenu className="ham2" onClick={movesidebar} />
      )}
    </>
  );
};

export default Sidebar;
