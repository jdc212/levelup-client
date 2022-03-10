import styles from "./CompensationRules.module.css";
import { useState, useEffect } from "react";
import api from "../../apis/api";
import { FormAddCompensationRules } from "../../components/FormAddCompensationRules/FormAddCompensationRules";

export default function CompensationRules() {
  const [compensation, setCompensation] = useState({
    launch: "",
    expirationDate: "",
    rules: "",
    optionalAddition: { addition: "", additionDate: "" },
  });

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await api.get("/compensation-rule/compensation");
        setCompensation([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPrograms();
  }, []);


  return (
    <div className={styles.clientList}>
      <FormAddCompensationRules />
      <section>
        <p>Launch Date: {compensation.launch}</p>
        <p>Expiration Date: {compensation.expirationDate}</p>
        <p>Rules: {compensation.rules}</p>
        {/*<p>Addicional Rules: {compensation.optionalAddition.addition}</p>*/}
        {/*<p>Addicional Date: {compensation.optionalAddition.additionDate}</p>*/}
      </section>
    </div>
  );
}
