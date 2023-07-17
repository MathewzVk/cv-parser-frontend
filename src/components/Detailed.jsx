import React from "react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../Styles/detailed.scss";

function Detailed({ data }) {
  return (
    <Box>
      <Typography variant="h4" component="h2" align="center">
        Data Extracted
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        {data ? (
          <Grid item xs={12} sm={8} md={6}>
            <List>
              <div className="right">
                <ListItem>
                  <ListItemText primary={`Name: ${data.name}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Email: ${data.email}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Phone No: ${data.mobile_number}`} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Name of College: ${data.college_name}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Degree: ${data.degree}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Designation: ${data.designation}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Experience: ${data.experience}`} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Name of Company Previously Worked: ${data.company_names}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`No. of Pages: ${data.no_of_pages}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Skills: ${data.skills.join(", ")}`} />
                </ListItem>
              </div>
            </List>
            <Button variant="contained" fullWidth>
              <Link
                to={{
                  pathname: "/document-download",
                  state: { foo: "bar" },
                }}
              >
                Edit/Download File
              </Link>
            </Button>
          </Grid>
        ) : (
          <Typography align="center">No data available</Typography>
        )}
      </Grid>
      <Box mt={2} display="flex" justifyContent="center"></Box>
    </Box>
  );
}

export default Detailed;
