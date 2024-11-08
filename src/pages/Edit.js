import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

function Edit(){
  const {id} = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  
  const {onDelete,onUpdate} = useContext(DispatchContext)
  const onData = (data)=>{
    if (window.confirm('수정하시겠습니까?')){
      const {date, content, emotionId } = data
      onUpdate(id, date, content,emotionId)
      navigate('/')
    }
    
  }

  const goBack = () => {
    navigate(-1)
  }
  const deleteHandler = () =>{
    if(window.confirm('정말로 삭제하시겠습니까? ')){
      onDelete(id);
      navigate('/')
    }
  }
  

  if(!data)
    return <div>로딩중입니다...</div>
  else {
    return(
      <div className="Edit">
        <Header 
          title={'다이어리 수정'}
          leftChild={<Button text={'< 뒤로가기'} onClick={goBack}/>}
          rightChild={<Button text={'삭제하기'} type={'negative'} onClick={deleteHandler}/>}
        />
        <Editor initData={data} onSubmit={onData}/>
      </div>
    )
  }
}
export default Edit;