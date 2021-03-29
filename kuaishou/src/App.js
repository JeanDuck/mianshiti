import './App.css';
import { Table } from 'antd';

function App() {
  //这个是表头固定的表格
  const columns = [
    {
      title: '姓名',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: '年龄',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },


  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `小明 ${i}`,
      age: 32,
      address: `北京. ${i}`,
    });
  }


  return (
    <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
  );
}

export default App;








