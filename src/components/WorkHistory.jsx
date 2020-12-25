import {
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(period, company, role, techspecs) {
  return { period, company, role, techspecs };
}

const rows = [
  createData(
    "Sep-2014 to present",
    "Rakuten India Enterprise Pvt. Ltd and Rakuten Inc",
    "Application Engineer",
    "Python, Golang, Kubernetes, Ansible, Graph DB,"
  ),
  createData(
    "Jan-2014 to Sep-2014",
    "ITC infotech and Robert Bosch",
    "Associate IT consultant",
    "Perl"
  ),
  createData(
    "Apr-2013 to Jan-2014",
    "eHover Systems India Pvt. Ltd.",
    "Software Engineer",
    "Perl, PHP, AWS (S3, route53, EC2), ZoneMinder"
  ),
  createData(
    "Apr-2011 to Apr-2013",
    "Dept. of P.G. Studies and Research in Biotechnology and Bioinformatics, Kuvempu University",
    "Project Assistant",
    "BioPython, BioPerl, LibSBML, Gromacs"
  ),
];

function WorkHistory() {
  const classes = useStyles();
  return (
    <Container id="WorkHistory">
      <Toolbar />
      <Typography variant="h5">Work History</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Period</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Tech Specs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.company}>
                <TableCell component="th" scope="row">
                  {row.period}
                </TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.techspecs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paper
        style={{
          width: 0,
          height: 250,
        }}
      />
    </Container>
  );
}

export default WorkHistory;
