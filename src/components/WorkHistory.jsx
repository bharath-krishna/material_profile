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
  withStyles,
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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
              <StyledTableCell>Period</StyledTableCell>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Tech Specs</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.company}>
                <StyledTableCell component="th" scope="row">
                  {row.period}
                </StyledTableCell>
                <StyledTableCell>{row.company}</StyledTableCell>
                <StyledTableCell>{row.role}</StyledTableCell>
                <StyledTableCell>{row.techspecs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default WorkHistory;
