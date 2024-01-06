// import './Textarea.css'
import './Textarea.css'


const Textarea = (props) => {
  console.log(props);
  return (
    <div >
      {/* <div>   */}
      <textarea value={props.value} onChange={props.onChange}></textarea> 
        {/* </div> */}
        
    </div>
   );
   
}


export default Textarea;

