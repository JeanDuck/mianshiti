import React, {} from "react";
import { throttle } from 'lodash'
import './index.less'

class FixedTable extends React.Component {
  constructor(props) {
    super(props);
    this.fixedColumns = [
      'label1',
      'label2',
    ];
    this.state = {
      tableData: this.generateTableData(100, 50),
      labelData: this.generateLabelData(50)
    };
    this.table_wrapper = React.createRef();
  }

  componentDidMount() {
    
  }

  setDraggable() {
    const wrapper_node = this.table_wrapper.current;
    let scrollLeft = 0;
    let scrollTop = 0;
    let clickPointX = 0;
    let clickPointY = 0;
    wrapper_node.addEventListener("mousedown", (evt) => {
      console.log("鼠标按下");
      scrollLeft = wrapper_node.scrollLeft;
      scrollTop = wrapper_node.scrollTop;
      clickPointX = evt.x;
      clickPointY = evt.y;
      wrapper_node.addEventListener("mousemove", moveHandler);
    });
    wrapper_node.addEventListener("mouseup", (evt) => {
      wrapper_node.removeEventListener("mousemove", moveHandler);
    });
    wrapper_node.addEventListener("mouseleave", (evt) => {
      wrapper_node.removeEventListener("mousemove", moveHandler);
    });

    wrapper_node.addEventListener("dragend", (evt) => {
      wrapper_node.removeEventListener("mousemove", moveHandler);
    });

    const moveHandler = throttle(event => {
      console.log("moveHandler 触发");
      // 我将表格滚动距离设置为鼠标移动距离的3倍，可根据实际情况设置成别的数值
      const newX = scrollLeft - (event.x - clickPointX) * 3;
      console.log(newX);
      const newY = scrollTop - (event.y - clickPointY) * 3;
      wrapper_node.scroll(newX, newY);
    }, 60)
  }

  generateTableData(listLength, columnLength) {
    const arr = [];
    for (let i = 1; i <= listLength; i++) {
      const obj = {};
      for (let j = 1; j <= columnLength; j++) {
        obj["label" + j] = i + "*" + j + "=" + i * j;
      }
      arr.push(obj);
    }
    return arr;
  }

  /* 生成表格列数据*/
  generateLabelData(labelLength) {
    const arr = [];
    for (let i = 1; i <= labelLength; i++) {
      const obj = {
        label: "列" + i,
        prop: "label" + i
      };
      arr.push(obj);
    }
    return arr;
  }

  render() {
    return (
      <div className="table-wrapper" style={{
        maxHeight: '800px'
      }} ref={this.table_wrapper}>
        <table className={"fixed-table"}>
          <thead>
          <tr>
            <th className={'fixed-column'} style={{
              zIndex: 300
            }}>
                <span style={{
                  display: 'inline-block',
                  width: '50px'
                }}>序号</span>
            </th>
            {this.state.labelData.map((columnItem, columnItemIndex) =>
              <th key={columnItemIndex}
                  className={this.fixedColumns.includes(columnItem.prop) ? 'fixed-column' : ''}
                  style={this.fixedColumns.includes(columnItem.prop) ? {
                    left: columnItemIndex * 100 + 50 + 'px',
                    width: '100px',
                    zIndex: 2 + (100 - columnItemIndex)
                  } : {}}>

                <span style={{
                  display: 'inline-block',
                  width: '100px'
                }}>
                  {columnItem.label}
                </span>
              </th>
            )}
          </tr>
          </thead>
          <tbody>
          {this.state.tableData.map((item, itemIndex) =>
            <tr key={itemIndex}>
              <td className={'fixed-column'} style={{
                zIndex: 200
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '50px'
                }}>序号</span>
              </td>
              {this.state.labelData.map((columnItem, columnItemIndex) =>
                <td key={columnItemIndex}
                    className={this.fixedColumns.includes(columnItem.prop) ? 'fixed-column' : ''}
                    style={this.fixedColumns.includes(columnItem.prop) ? {
                      left: columnItemIndex * 100 + 50 + 'px',
                      width: '100px',
                      zIndex: 1 + (100 - columnItemIndex)
                    } : {}}
                >
                  <span style={{
                    display: 'inline-block',
                    width: '100px'
                  }}>
                    {item[columnItem.prop]}
                  </span>
                </td>
              )}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FixedTable;