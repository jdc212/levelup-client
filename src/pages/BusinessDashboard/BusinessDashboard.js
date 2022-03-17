import { useState, useEffect } from "react";
import { ClientList } from "../../components/ClientList/ClientList";
import { FormAddUser } from "../../components/FormAddUser/FormAddUser";
import { CardPromoList } from "../../components/CardPromoList/CardPromoList";
import { FormAddPromo } from "../../components/FormAddPromo/FormAddPromo";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import api from "../../apis/api";

export default function BusinessDashboard() {
  const [programs, setPrograms] = useState([]);
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState([]);
  const [backup, setBackup] = useState([]);
  /* const [isCredited, setIsCredited] = useState(false); */

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
        setBackup([...response2.data]);
        setUsers([...response2.data.reverse()]);
        setReload(false);
        console.log(users);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserPoints();
  }, [reload]);

  function filterUserEmail(searchParams) {
    if (searchParams === "") {
      setUser([...backup]);
      return;
    }

    const filtered = users.filter((currentUser) => {
      return currentUser.customerEmail
        .toLowerCase()
        .includes(searchParams.toLowerCase());
    });

    setUser(filtered);
  }

  return (
    <>
      <div className="px-4 bg-gray-100">
        <div className="md:col-span-1">
          <div className="py-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Create Promotion
            </h3>
          </div>
        </div>

        <div className="flex justify-center">
          <FormAddPromo />
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="pb-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Registered Promotions
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {programs.map((current) => {
            return (
              <CardPromoList
                key={current._id}
                id={current._id}
                creditSystem={current.creditSystem}
                launch={current.launch}
                deadline={current.deadline}
                service={current.service}
                reloadPage={setReload}
              />
            );
          })}
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="pb-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Create User Points
            </h3>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <FormAddUser />
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="pb-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Search User Points
              </h3>
            </div>
          </div>
          
            <SearchBar placeholder="Search" filterAPI={filterUserEmail} />
          
          {user.map((current) => {
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
                /*isCredited={setIsCredited}
            creditState={isCredited}
            filterUserEmail={filterUserEmail}*/
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
