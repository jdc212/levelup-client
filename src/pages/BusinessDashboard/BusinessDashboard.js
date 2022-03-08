import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClientList } from "../../components/ClientList/ClientList";
import api from "../../apis/api";

export default function BusinessDashboard(){

  const navigate = useNavigate();

  const [programs, setPrograms] = useState([])
  const [users, setUsers] = useState([])
  const [form, setForm] = useState([])

  console.log(setPrograms)

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await api.get("/points/my-points");
        console.log(response.data)
        setPrograms([...response.data]);
        console.log(programs)
      } catch (error) {
        console.error(error);
      }
    }
    fetchPrograms();
  }, [programs]);

  useEffect(() => {
    async function fetchUserPoints() {
      try {
        const response = await api.get("/user-points/user-points");
        console.log(...response.data)
        setUsers([...response.data]);
        console.log(users)
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserPoints();
  }, [users]);

   
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
       {users.map((current) => {
        return <ClientList
            key={current._id}
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