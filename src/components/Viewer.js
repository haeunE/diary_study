import { emotionList } from '../utils/util';
import './Viewer.css'
function Viewer({content, emotionId}){
  const emotionItem = emotionList.find((data)=> data.id == emotionId);


  return(
    <div className="Viewer">
      <section>
        <h4>오늘의 기분</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={emotionItem.img} alt='' />
          <div className='emotion_descript'>
            {emotionItem.name}
          </div>
        </div>
      </section>
      <section>
        <h4>오늘의 다이어리 내용</h4>
        <div className='content_wrapper'>
          <p>
            {content}
          </p>
        </div>
      </section>
    </div>
  )
}
export default Viewer;