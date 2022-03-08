import { useState, useEffect } from "react";
import { ClientList } from "../../components/ClientList/ClientList";
import api from "../../apis/api";

export default function BusinessDashboard(){

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

  return(
    <div>
       {userPoints.map((current) => {
        return <ClientList
            customerEmail= {current.customerEmail}
            pointsAccumulated= {current.pointsAccumulated}
            service={programs.map((program) => program.service)}    
            onChange={handleChange}   
           />
       })}
    </div>
  )

}