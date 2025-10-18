import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CompanyCard({ company }) {
  return (
    <Card sx={{ boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h6">{company.name}</Typography>
        <Typography color="text.secondary">Industry: {company.industry}</Typography>
        <Typography color="text.secondary">Location: {company.location}</Typography>
      </CardContent>
    </Card>
  );
}
