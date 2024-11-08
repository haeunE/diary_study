import { useNavigate } from 'react-router-dom';
import { getEmotionImgById } from '../utils/util';
import Button from './Button';
import './DiaryItem.css'
import { memo } from 'react';
function DiaryItem({id,emotionId,content,date}){
  const navigate = useNavigate();
  const goDetail = () =>{
    navigate(`/diary/${id}`)
  }
  const goEdit = () =>{
    navigate(`/edit/${id}`)
  }

  return(
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`} onClick={goDetail}>
        <img src={getEmotionImgById(emotionId)} alt='' />
      </div>
      <div className='info_section' onClick={goDetail}>
        <div className='date_wrapper'>
          {new Date(date).toLocaleDateString()}
        </div>
        <div className='content_wrapper'>
          {content.slice(0,20)}
        </div>
      </div>
      <div className=''>
        <Button text={'수정하기'} onClick={goEdit}/>
      </div>
    </div>
  )
}
export default memo( DiaryItem );