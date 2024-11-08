import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { Statecontext } from "../App";
import { getMonthRangeByDate } from "../utils/util";
import DiaryList from "../components/DiaryList";

function Home(){
  const data = useContext(Statecontext)
  const [filterData, setFilterData] = useState([])
  const [pivotDate, setPivotDate] = useState(new Date())
  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`
  const onDecreaseMonth = () =>{
    setPivotDate(new Date( pivotDate.getFullYear(), pivotDate.getMonth() -1 ))
  }
  const onIncreaseMonth = () =>{
    setPivotDate(new Date( pivotDate.getFullYear(), pivotDate.getMonth() +1 ))
  }
  // 날짜변경되거나 게시물이 바뀌었을때 렌더링 될 부분
  useEffect(()=>{
    if(data.length >= 1){
      const {beginTimeStamp,endTimeStamp} = getMonthRangeByDate(pivotDate)
      setFilterData(
        data.filter((d)=>beginTimeStamp <= d.date && d.date< endTimeStamp)
      )
    }else {
      setFilterData([])
    }
  },[pivotDate,data])

  return(
    <>
      <div>
        <Header 
          title={headerTitle}
          leftChild={<Button text={'<'} onClick={onDecreaseMonth}/>}
          rightChild={<Button text={'>' } onClick={onIncreaseMonth}/>}
        />
      </div>
      <DiaryList data={filterData}/>
        
    </>
  )
}
export default Home;