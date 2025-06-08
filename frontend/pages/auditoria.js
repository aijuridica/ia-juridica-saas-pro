import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Auditoria() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function fetchLogs() {
      const response = await api.get("/auditoria");
      setLogs(response.data);
    }
    fetchLogs();
  }, []);

  return (
    <div>
      <h1>Logs de Auditoria</h1>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            {log.timestamp} - {log.action} - {log.resource}
          </li>
        ))}
      </ul>
    </div>
  );
}