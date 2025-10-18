import React from "react";
import { useState, useEffect } from "react";
import Filters from "../component/Filter";
import CompanyCard from "../component/CompanyCard";
import CompanyTable from "../component/CompanyTable";
import { useCompanies } from "../context/CompanyContext";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Home() {
  const { companies, loading, error } = useCompanies();
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ search: "", industry: "", location: "" });
  const [sortOrder, setSortOrder] = useState("asc");
  const [viewMode, setViewMode] = useState("card");

    useEffect(() => {
    let result = companies;

    if (filters.search){
        result = result.filter((char) => char.name.toLowerCase().includes(filters.search.toLowerCase()));
    }

    if (filters.industry){
        result = result.filter((char) => char.industry === filters.industry);
    }

    if (filters.location){
        result = result.filter((char) => char.location === filters.location);
    }

    result = [...result].sort((a, b) =>
      sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

    setFiltered(result);
    }, [filters, companies, sortOrder]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Failed to fetch data.</Typography>;

    return (
    <div>
        <Filters filters={filters} setFilters={setFilters} sortOrder={sortOrder} setSortOrder={setSortOrder}
            industries={[...new Set(companies.map((char) => char.industry))]}
            locations={[...new Set(companies.map((char) => char.location))]}
        />
        <ToggleButtonGroup value={viewMode} exclusive
            onChange={(e, newMode) => newMode && setViewMode(newMode)}
            sx={{ mb: 2 }}
        >
            <ToggleButton value="card">Card View</ToggleButton>
            <ToggleButton value="table">Table View</ToggleButton>
        </ToggleButtonGroup>

        {viewMode === "card" ? (
            <Grid container spacing={2} >
                {filtered.map((char) => (
                <Grid item size={{xs:12 , sm: 6, md: 3}} key={char.id}>
                    <CompanyCard company={char} />
                </Grid>
            ))}
            </Grid>
        ) : (
            <CompanyTable companies={filtered} />
        )}
    </div>
  );
}

export default Home;
