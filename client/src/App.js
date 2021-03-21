import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Customer from './components/Customer';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '김길동',
    birthday: '941222',
    gender: '남자',
    job: '프로그래머'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '이길동',
    birthday: '951222',
    gender: '남자',
    job: '백수'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '박길동',
    birthday: '961222',
    gender: '여자',
    job: '디자이너'
  },
]

function App() {
  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
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
          {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
