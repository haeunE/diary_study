import './EmotionItem.css'

function EmotionItem({id,img,name,onClick,isSelected}){
  function clickHandler(){
    onClick(id);
  }
  return(
    
    <div className={"EmotionItem "+ (isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`)} onClick={clickHandler}>
      <img src={img} alt={`emotion${id}`}/>
      <span>{name}</span>
    </div>
  )
}
export default EmotionItem