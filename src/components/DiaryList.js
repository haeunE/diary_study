import { useEffect, useState } from "react";
import Button from "./Button";
import './DiaryList.css'
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";



const sortOptionList = [
  {value: 'latest', name : '최신순'},
  {value : 'oldest', name : '오래된 순'}
]



function DiaryList({data}){
  const [sortType,setSortType] = useState('latest')
  const [sortedData,setSortedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const compare = (a,b) =>{
      if(sortType == 'latest'){
        return Number(b.date) - Number(a.date)
      }else{
          return Number(a.date)-Number(b.date)
      }
    }

    const copyList = [...data]
    copyList.sort(compare)
    setSortedData(copyList)

  },[data,sortType])

  const changeSortTypeHandler = (e) =>{
    setSortType(e.target.value)
  }

  const clickNewHandler= ()=>{
    navigate('/new')
  }
  return(
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType}>
            {
              sortOptionList.map((data,i)=>{
                return (
                  <option value={data.value} key={i}>
                    {data.name}
                  </option>
                )
              })
            }
          </select>
        </div>
        <div className="right_col">
          <Button text={'새 다이어리 작성'} type={'positive'} onClick={clickNewHandler}/>
        </div>
      </div>
      <div className="list_wrapper">
          {
            sortedData.map((data) => {
              return(
                <DiaryItem key={data.id} {...data}/>
              )
            })
          }
      </div>
    </div>
  )
}
export default DiaryList;