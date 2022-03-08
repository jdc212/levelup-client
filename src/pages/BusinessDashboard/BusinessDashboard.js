import { useState, useEffect } from "react";
import { ClientList } from "../../components/ClientList/ClientList";
import api from "../../apis/api";
import { useNavigate } from "react-router-dom";

export default function BusinessDashboard(){

  const navigate = useNavigate();
  const [programs, setPrograms] = useState([])
  const [userPoints, setUserPoints] = useState([])
  const [form, setForm] = useState({ });

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await api.get("/points/my-points");
        console.log(response.data);
        setPrograms([ ...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPrograms();
  }, []);

  useEffect(() => {
    async function fetchUserPoints() {
      try {
        const response = await api.get("/user-points/user-points");
        console.log(response.data);
        setUserPoints([ ...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserPoints();
  }, []);

   
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  } 

  async function handleSubmitCredit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/:pointId/add-points/:userPointsId", form);
      console.log(response.data);
      navigate("/businessdashboard");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmitCompensate(event) {
    event.preventDefault();
    try {
      const response = await api.post("/:pointId/credit-points/:userPointsId", form);
      console.log(response.data);
      navigate("/businessdashboard");
    } catch (error) {
      console.log(error);
    }
  }


  return(
    <div>
       {userPoints.map((current) => {
        return <ClientList
            customerEmail= {current.customerEmail}
            pointsAccumulated= {current.pointsAccumulated}
            service={programs.map((program) => program.service)}    
            onChange={handleChange}
            handleSubmitCredit={handleSubmitCredit}
            handleSubmitCompensate={handleSubmitCompensate}
           />
       })}  
    </div>
  )

}