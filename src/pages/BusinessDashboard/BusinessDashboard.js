import { useState, useEffect } from "react";
import { ClientList } from "../../components/ClientList/ClientList";
import { FormAddUser } from "../../components/FormAddUser/FormAddUser";
import { CardPromoList } from "../../components/CardPromoList/CardPromoList";
import { FormAddPromo } from "../../components/FormAddPromo/FormAddPromo";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import api from "../../apis/api";
import DashboardNavBar from "./DashboardNavBar";

export default function BusinessDashboard() {
  const [programs, setPrograms] = useState([]);
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState([]);
  const [backup, setBackup] = useState([]);
  /* const [isCredited, setIsCredited] = useState(false); */

  useEffect(() => {
    async function fetchPrograms() {
      try {
        // api.get("/points/my-points").then(response => setPrograms(response.data));
        const response = await api.get("/points/my-points");
        setPrograms(response.data);
        setReload(false);
        console.log(programs);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPrograms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  useEffect(() => {
    async function fetchUserPoints() {
      try {
        const response = await api.get("/user-points/user-points");
        setBackup([...response.data]);
        setUsers([...response.data.reverse()]);
        setReload(false);
        console.log(users);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserPoints();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const handleProgramAdded = (program) => {
    setPrograms((prevPrograms) => [...prevPrograms, program]);
  };

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
      <DashboardNavBar />
      <div className="px-16 bg-gray-50">
        <FormAddPromo onSubmit={handleProgramAdded} />

        <div className="sm:block" aria-hidden="true">
          <div className="py-4">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900" id="promotions">
                    Registered Promotions
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-6">
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
                        className="px-3"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <FormAddUser />

        <div className="sm:block" aria-hidden="true">
          <div className="py-4">
            <div className="border-t border-gray-200" />
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
    </>
  );
}
