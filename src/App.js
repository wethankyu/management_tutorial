import './App.css';
import Customer from './components/Customer';

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
    <>
      {
        customers.map(c => {
          return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)
        })
      }
    </>
  );
}

export default App;
