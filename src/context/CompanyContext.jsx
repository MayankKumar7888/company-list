import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const CompanyContext = createContext();

export function Provider({ children }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <CompanyContext.Provider value={{ companies, loading, error }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompanies() {
  return useContext(CompanyContext);
}
