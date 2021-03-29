import FixedTable from './Table'
import './App.css';


//这个是没有成功表头固定的源码实现
function App() {
  return (
    <div>
      <FixedTable />
    </div>
  );
}

export default App;

/*
      <Select
        mode="multiple"
        showArrow
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{ width: '100%' }}
        options={options}
      />

            <select className="myselect" >
        <option className="myselected" style={{
         color: '#fe606e',}}>试一下</option>
         <option className="myselected" style={{
         color: '#fe606e',}}>试一下</option>
         <option className="myselected" style={{
         color: '#fe606e',}}>试一下</option>
      </select>

 */
