import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DispatchContext } from "../App";
import { useContext } from "react";

function New(){
  const navigate = useNavigate();
  const {onCreate} = useContext(DispatchContext);
  const onSubmit = (data) => {
    const {date, content, emotionId } = data
    onCreate(date, content,emotionId)
    navigate('/')
  }
  
  const goBack =() =>{
    navigate(-1)
  }

  return(
    <div className="New">
      <Header
        title={'새 다이어리 작성'}
        leftChild={<Button text={'< 뒤로가기'} onClick={goBack}/> }
      />
      <Editor onSubmit={onSubmit}/>

    </div>
  )
}
export default New;