import emotion1 from '../emotions/emotion1.png'
import emotion2 from '../emotions/emotion2.png'
import emotion3 from '../emotions/emotion3.png'
import emotion4 from '../emotions/emotion4.png'
import emotion5 from '../emotions/emotion5.png'

export const getEmotionImgById =(emotionId) =>{
  const targetEmotionId = String(emotionId)

  switch(targetEmotionId){
    case '1':
      return emotion1;
    case '2':
      return emotion2;
    case '3':
      return emotion3;
    case '4':
      return emotion4;
    case '5':
      return emotion5;
    default:
      return null;

  }
}

//날짜를 받아서 연월일 형태로 변환해 리턴하는 함수
export const getFormattedDate = (date)=>{
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let day = date.getDate();

  month = String(month).padStart(2,0);
  day = String(day).padStart(2,0);

  return `${year}-${month}-${day}`;
}

export const emotionList =[
  {
    id:1,
    name: '매우 좋음',
    img : getEmotionImgById(1)
  },
  {
    id:2,
    name: '좋음',
    img : getEmotionImgById(2)
  },
  {
    id:3,
    name: '보통',
    img : getEmotionImgById(3)
  },
  {
    id:4,
    name: '나쁨',
    img : getEmotionImgById(4)
  },
  {
    id:5,
    name: '매우 나쁨',
    img : getEmotionImgById(5)
  }

]

export const getMonthRangeByDate = (date) =>{
  console.log(date)
  //해당 월의 1일
  const beginTimeStamp = new Date(date.getFullYear(),date.getMonth(),1).getTime()
  // 해당 월의 다음 달 1일
  const endTimeStamp = new Date(date.getFullYear(),date.getMonth()+1,1).getTime()

  return {beginTimeStamp,endTimeStamp}
}