import { useCallback, useEffect, useState } from 'react'
import './Editor.css'
import { emotionList, getFormattedDate } from '../utils/util'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import EmotionItem from './EmotionItem'

function Editor({initData,onSubmit}){
  const navigate = useNavigate();

  const [state,setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content : ''
  });

  useEffect(()=>{
    if(initData){
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date)))
      })
    }
  },[initData])

  function changeDateHandler(e){
    setState({
      ...state,
      date: e.target.value
    })
  }

  function changeContentHander(e){
    setState({
      ...state,
      content: e.target.value
    })
  }

  function submitHandler(){
    onSubmit(state);
  }

  function goBackHandler(){
    navigate(-1)
  }

  const changeEmotionHandler = useCallback((emotionId) => {
    setState({
      ...state,
      emotionId
    })
  },[])

  return(
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className='input_wrapper'>
          <input type='date' value={state.date} onChange={changeDateHandler}/>
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 기분</h4>
        <div className='input_wrapper emotion_list_wrapper'>
          {
            emotionList.map((data,i) => {
              return(
                <EmotionItem
                  key={i}
                  {...data}
                  onClick={changeEmotionHandler}
                  isSelected={state.emotionId === data.id}
                />
              )
            })
          }
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 내용</h4>
        <div className='input_wrapper'>
          <textarea placeholder='기록하고 싶은 내용을 입력하시오.'
          value={state.content} onChange={changeContentHander}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text={'취소하기'} type={'negative'} onClick={goBackHandler}/>
        <Button text={'작성완료'} type={'positive'} onClick={submitHandler} />
      </div>
    </div>
  )
}
export default Editor