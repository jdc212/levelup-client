//import styles from "./CompensationRules.module.css";
import { useState, useEffect } from "react";
import api from "../../apis/api";
import { FormAddCompensationRules } from "../../components/FormAddCompensationRules/FormAddCompensationRules";
import { CompensationRulesList } from "../../components/CompensationRulesList/CompensationRulesList";

export default function CompensationRules() {
  const [form, setForm] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchCompensation() {
      try {
        const response = await api.get("/compensation-rule/compensation");
        setForm([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCompensation();
  }, [reload]);

  return (
    <>
      <FormAddCompensationRules />
      <div>
        {form.map((current) => {
          return (
            <CompensationRulesList
              key={current._id}
              launch={current.launch}
              expirationDate={current.expirationDate}
              rules={current.rules}
              reloadPage={setReload}
          />);
        })}
      </div>
    </>
  );
}
