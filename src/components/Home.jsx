import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      //console.log(res.data);
      setData(res.data);
    });
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID </StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell align="center">{item.id}</StyledTableCell>
              <StyledTableCell align="center">{item.name}</StyledTableCell>
              <StyledTableCell align="center">{item.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
