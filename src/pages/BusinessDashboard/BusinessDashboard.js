import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClientList } from "../../components/ClientList/ClientList";
import { FormAddUser } from "../../components/FormAddUser/FormAddUser";
import api from "../../apis/api";

export default function BusinessDashboard() {
  const navigate = useNavigate();

  const [programs, setPrograms] = useState([]);
  const [users, setUsers] = useState([]);
  const [formCredit, setFormCredit] = useState();
  const [formCompensate, setFormCompensate] = useState();
    
  console.log(setPrograms);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await api.get("/points/my-points");
        setPrograms([...response.data]);
        console.log(programs);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPrograms();
  }, []);

    useEffect(() => {
    async function fetchUserPoints() {
      try {
        const response2 = await api.get("/user-points/user-points");
        console.log(response2.data)
        setUsers([...response2.data.reverse()]);
        console.log(users)

      } catch (error) {
        console.error(error);
      }
    }
    fetchUserPoints();
  }, []);

  function handleChangeCredit(event) {
    setFormCredit({ ...formCredit, [event.target.name]: event.target.value });
  }
  

  async function handleSubmitCredit(event) {
    event.preventDefault();
    try {
      const response = await api.post(
        "/:pointId/add-points/:userPointsId",
        formCredit
      );
      console.log(response.data);
      navigate("/");
      navigate("/businessdashboard");
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCompensate(event) {
    setFormCompensate({ ...formCompensate, [event.target.name]: event.target.value });
  }

  async function handleSubmitCompensate(event) {
    event.preventDefault();
    try {
      const response = await api.post(
        "/credit-points/:userPointsId",
        formCompensate
      );
      console.log(response.data);
      navigate("/");
      navigate("/businessdashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <FormAddUser/>
      
      <h3>Users Points</h3>
        
        {users.map((current) => {
        return <ClientList
            key={current._id}
            customerEmail= {current.customerEmail}
            pointsAccumulated= {current.pointsAccumulated}
            services={programs.map((program) => program.service)}    
            //creditSystem={programs.filter((program) => {return program === Object.values(formCredit)[0]} ).creditSystem}
            onChangeCredit={handleChangeCredit}
            onChangeCompensate={handleChangeCompensate}
            handleSubmitCredit={handleSubmitCredit}
            handleSubmitCompensate={handleSubmitCompensate}
           />
       })}
    </div>
  );
}
