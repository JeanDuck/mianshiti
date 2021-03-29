import './App.css';
import { Select, Tag } from 'antd';

//这个是下拉选择
function App() {
  const options = [{ value: 'gold', label: '未生效' }, { value: 'red', label: '变更中' }, { value: 'green', label: '作废' }, { value: 'cyan', label: '正常' }, { value: 'blue', label: '审核中' }];
  function tagRender(props) {
    const { label, value, closable, onClose } = props;

    return (
      <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
        {label}
      </Tag>
    );
  }
  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      defaultValue={['gold', 'cyan']}
      style={{ width: '100%' }}
      options={options}
    />

  );
}

export default App;









