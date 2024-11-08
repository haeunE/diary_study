import logo from './logo.svg';
import './App.css';
import { emotionList, getEmotionImgById }from './utils/util';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import { createContext, useEffect, useReducer, useRef, useState } from 'react';

export const Statecontext = createContext();
export const DispatchContext = createContext();

const mokData = [
  {
    id: 'm1',
    date: new Date().getTime(),
    content : '임시 데이터 1',
    emotionId : 1
  },
  {
    id: 'm2',
    date: new Date().getTime()+2,
    content : '임시 데이터 2',
    emotionId : 2
  },
  {
    id: 'm3',
    date: new Date().getTime()+3,
    content : '임시 데이터 3',
    emotionId : 3
  }
]

function reducer(state,action){
  switch(action.type){
    case 'CREATE':
      return [action.data, ...state]
    case 'UPDATE':
      return state.map((data) => data.id ==action.data.id ? {...action.data} : data)
    case 'DELETE':
      return state.filter((data) => data.id != action.targetId) //새 배열을 만들어줌
    case 'INIT':
      return action.data
    default:
      return state;
    
  }
  return state
}



function App() {

  const [data, dispatch] = useReducer(reducer,[])
  const idRef = useRef(0)
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  useEffect(() =>{
    dispatch({
      type: 'INIT',
      data: mokData
    })
    setIsDataLoaded(true);
  },[])

  const onCreate = (date, content, emotionId) =>{
    dispatch({
      // action 값으로 들어감
      type: 'CREATE',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    })
    idRef.current += 1;
  }

  const onUpdate = (targetId, date, content, emotionId) =>{
    dispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    })
  }
  
  const onDelete = (targetId) =>{
    dispatch({
      type: 'DELETE',
      targetId
    })
  }

  if(!isDataLoaded)
    return <div>로딩중입니다.</div>

  return (
    <div className="App">
      <Statecontext.Provider value={data}>
        <DispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/new' element={<New />}/>
            <Route path='/diary/:id' element={<Diary />}/>
            <Route path='/edit/:id' element={<Edit />}/>
          </Routes>
        </DispatchContext.Provider>
      </Statecontext.Provider>
    </div>
  );
}

export default App;
