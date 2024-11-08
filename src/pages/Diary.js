import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../utils/util";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";

function Diary(){
  const {id} = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();

  if(!data)
    return <div>로딩중입니다...</div>
  else {
    const {date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(date))} 다이어리`

    const goBack=() =>{
      navigate(-1)
    }

    const goEdit = () =>{
      navigate(`/edit/${id}`)
    }

    return(
      <div>
        <Header 
          title={title}
          leftChild={<Button text={'< 뒤로 가기'} onClick={goBack}/>}
          rightChild={<Button text={'수정하기'} onClick={goEdit}/>}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    )
  }
  
}
export default Diary;