import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Myapi from "./Myapi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Charts = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`${Myapi}/alldata`).then((d) => {
      setUser(d.data);
    });
  };

  const courseData = user.reduce((acc, curr) => {
    const course = acc.find((item) => item.name === curr.course);
    if (course) {
      course.value += 1;
    } else {
      acc.push({ name: curr.course, value: 1 });
    }
    return acc;
  }, []);

  // Calculate data for Course-Gender distribution
  const courseGenderData = user.reduce((acc, curr) => {
    const course = acc.find((item) => item.course === curr.course);
    if (course) {
      if (curr.gender === "male") course.male += 1;
      else if (curr.gender === "female") course.female += 1;
    } else {
      acc.push({
        course: curr.course,
        male: curr.gender === "male" ? 1 : 0,
        female: curr.gender === "female" ? 1 : 0,
      });
    }
    return acc;
  }, []);

  // Calculate data for Course-Role distribution
  const courseRoleData = user.reduce((acc, curr) => {
    const course = acc.find((item) => item.course === curr.course);
    if (course) {
      if (curr.role === "admin") course.admin += 1;
      else if (curr.role === "user") course.user += 1;
    } else {
      acc.push({
        course: curr.course,
        admin: curr.role === "admin" ? 1 : 0,
        user: curr.role === "user" ? 1 : 0,
      });
    }
    return acc;
  }, []);

  return (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
      <button
  className="btn mt-3 fw-bold animated-button"
        onClick={() => navigate("/")}
      >
        <span className="text-white">
          <IoArrowBackCircle /> Go to Home
        </span>
      </button>
      </div>
      </div>
      </div>
      <div className="container">
        <h1 className="text-center my-4">Data Visualizations</h1>

        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <h2 className="text-center">Total Students per Course</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <h2 className="text-center">Distribution of Courses</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={courseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                >
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ["#8884d8", "#82ca9d", "#ffc658", "#ff7f0e"][index % 4]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-12 col-md-12 mb-4">
          <h2 className="text-center">Course-Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseGenderData}>
              <XAxis dataKey="course" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="male" fill="#8884d8" name="Male" />
              <Bar dataKey="female" fill="#82ca9d" name="Female" />
            </BarChart>
          </ResponsiveContainer>

          <h2 className="text-center">Course-Role Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseRoleData}>
              <XAxis dataKey="course" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="admin" fill="#ffc658" name="Admin" />
              <Bar dataKey="user" fill="#ff7f0e" name="User" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Charts;
