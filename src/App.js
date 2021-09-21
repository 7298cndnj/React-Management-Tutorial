import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper } from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { withStyles } from '@material-ui/styles';


const styles = ({
  root: {
  width: "100%",
  spacing: 3 ,
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  }
  });
  

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '유경민',
  'birthday': '980113',
  'gender': '여자',
  'job': '개발자',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/animals',
  'name': '문현상',
  'birthday': '931128',
  'gender': '남자',
  'job': '개발자'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/nature',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '개발자'
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}> 
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
            </TableHead>
          <TableBody>
        {customers.map(c => { return ( <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}

              />
            )
          })
        }
        </TableBody>
     
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
