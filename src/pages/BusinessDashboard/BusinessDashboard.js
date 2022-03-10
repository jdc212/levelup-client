import { useState, useEffect } from "react";
import { ClientList } from "../../components/ClientList/ClientList";
import { FormAddUser } from "../../components/FormAddUser/FormAddUser";
import { CardPromoList } from "../../components/CardPromoList/CardPromoList";
import { FormAddPromo} from "../../components/FormAddPromo/FormAddPromo";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import api from "../../apis/api";

export default function BusinessDashboard() {

  const [programs, setPrograms] = useState([]);
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);

  console.log(setPrograms);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await api.get("/points/my-points");
        setPrograms([...response.data]);
        setReload(false);
        console.log(programs);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPrograms();
  }, [reload]);

  useEffect(() => {
    async function fetchUserPoints() {
      try {
        const response2 = await api.get("/user-points/user-points");
        console.log(response2.data);
        setUsers([...response2.data.reverse()]);
        setReload(false);
        console.log(users);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserPoints();
  }, [reload]);

  return (
    <>
    <div>
    
    <FormAddPromo />

    <h3>Card Promo List</h3>

    {programs.map((current) => {
      return (
        <CardPromoList
          key={current._id}
          id={current._id}
          creditySystem={current.creditySystem}
          launch={current.launch}
          deadline={current.deadline}
          service={current.service} 
          
          reloadPage={setReload}
        />
      );
    })}
    </div>

    <div>
    
      <FormAddUser />
      <FormAddPromo />
      <SearchBar />

      <h3>Users Points</h3>

      {users.map((current) => {
        return (
          <ClientList
            key={current._id}
            id={current._id}
            customerEmail={current.customerEmail}
            pointsAccumulated={current.pointsAccumulated}
            services={programs.map((program) => {
              return {
                service: program.service,
                creditSystem: program.creditSystem,
              };
            })}
            reloadPage={setReload}
          />
        );
      })}
    </div>
    </>
  );
}
