import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GiMoneyStack } from "react-icons/gi";
import { HiArrowSmRight } from "react-icons/hi";
import { MdSchool, MdScreenSearchDesktop } from "react-icons/md";
import {
  FaBusAlt,
  FaBook,
  FaMoneyBillWave,
  FaPenNib,
  FaUserAlt,
} from "react-icons/fa";
import {
  BsGraphUpArrow,
  BsGraphUp,
  BsTable,
  BsFillPencilFill,
} from "react-icons/bs";

export default function Home() {
  return (
    <>
      <h1 className="homeheading">
        Dashboard <span>&nbsp;overview, analytics & report</span>
      </h1>
      <section className="homedash">
        <div className="card1">
          <MdSchool className="cardicon" />
          <h2>Student Management</h2>
          <div className="linksec">
            <Link className="cardlink" href="/student/addstudent">
              <HiArrowSmRight className="arrow" /> Add New Student
            </Link>
            <Link className="cardlink" href="/student/viewstudentdetails">
              <HiArrowSmRight className="arrow" /> Student Details
            </Link>
            <Link className="cardlink" href="/student/transfercertificate">
              <HiArrowSmRight className="arrow" /> Transfer Certificate
            </Link>
          </div>
        </div>

        <div className="card1">
          <GiMoneyStack className="cardicon" />
          <h2>Fees Management</h2>
        </div>
        <div className="card1">
          <FaBusAlt className="cardicon" />
          <h2>Transport Management</h2>
        </div>
        <div className="card1">
          <BsGraphUpArrow className="cardicon" />
          <h2>Stock Management</h2>
        </div>
        <div className="card1">
          <FaMoneyBillWave className="cardicon" />
          <h2>Payroll Management</h2>
        </div>
        <div className="card1">
          <FaBook className="cardicon" />
          <h2>Library Management</h2>
        </div>
        <div className="card1">
          <FaPenNib className="cardicon" />
          <h2>Exam Management</h2>
        </div>
        <div className="card1">
          <BsGraphUp className="cardicon" />
          <h2>Attendance Management</h2>
        </div>
        <div className="card1">
          <BsTable className="cardicon" />
          <h2>Time Table Management</h2>
        </div>
        <div className="card1">
          <FaUserAlt className="cardicon" />
          <h2>Users Management</h2>
        </div>
        <div className="card1">
          <MdScreenSearchDesktop className="cardicon" />
          <h2>Website Management</h2>
        </div>
        <div className="card1">
          <BsFillPencilFill className="cardicon" />
          <h2>Homework Management</h2>
        </div>
      </section>
    </>
  );
}
