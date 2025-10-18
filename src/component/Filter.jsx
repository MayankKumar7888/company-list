import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Filters({ filters, setFilters, industries, locations, sortOrder, setSortOrder }) {
  return (
    <Box display="flex" gap={2} sx={{ my: 2, flexWrap: "wrap"}}>
        <TextField label="Search by name" variant="outlined" value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <TextField select label="Industry" value={filters.industry}
            onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
        >
        <MenuItem value="">All</MenuItem>
            {industries.map((ind) => (
                <MenuItem key={ind} value={ind}>{ind}</MenuItem>
            ))}
        </TextField>
        <TextField select label="Location" value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
        <MenuItem value="">All</MenuItem>
            {locations.map((loc) => (
                <MenuItem key={loc} value={loc}>{loc}</MenuItem>
            ))}
        </TextField>
        <Button variant="outlined" sx={{width: '160px'}}
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
        Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
        </Button>
    </Box>
  );
}