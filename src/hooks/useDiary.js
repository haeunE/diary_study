import { useContext, useEffect, useState } from "react";
import { Statecontext } from "../App";
import { useNavigate } from "react-router-dom";

function useDiary(id){
  
  const data = useContext(Statecontext)
  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    const matchDiary = data.find((d) => d.id == id )
    if(matchDiary)
      setDiary(matchDiary)
    else {
      alert ('해당 데이터가 없습니다.')
      navigate('/')
    }

  },[id, data])

  return diary
}
export default useDiary;