
import PropsClass from "./Day4/PropsClass";
import PropsFunctional2 from "./Day4/PropsFunctional2";
import PropsFunctional3 from "./Day4/PropsFunctional3";
import PropsFunctional from "./Day4/PropsFunctional";
import ArrowProps from "./Day4/ArrowProps";
import StateClassCom from "./Day4/StateClassCom";
import StateFunction from "./Day4/StateFunction";
import StateHoldObject from "./Day4/StateHoldObject";
import Parent from "./Day4/ParentChildCommunication";
import TwoWayBinding from "./Day4/TwoWayBinding";
import DynamicRendering from "./Day4/DynamicRendering";
import DefaultProps from "./Day4/DefaultProps";
function App() {
  return (
   /* <div className="App">
      <form> 
        <h1>Login page</h1>
        <label>
         <b>Name</b> 
        </label>&nbsp; ṇṇ
        <input type ="text" placeholder="enter yor name"> 

        </input> <br></br> <br></br>
        <label>
          <b>Email</b>
        </label> 
        <input type ="text" placeholder="enter yor email"> 

        </input> <br></br><br></br>
        <label>
         <b>Password</b> 
        </label> 
        <input type ="password" placeholder="enter yor password"> 

        </input> <br></br><br></br>
        <label>
          <b>DOB</b>      
            </label> 
        <input type ="date"> 

        </input> <br></br><br></br>
        <label><b>Gender</b></label>
        <label><input type="radio"></input>male</label>
        <label><input type="radio"></input>female</label> <br></br><br></br>
        <label><b>Country</b></label>&nbsp; &nbsp;
       <select>
        <option>india</option>
        <option>pakistan</option>
       </select><br></br><br></br>
       <label><b>Hobbies</b></label><br></br>&nbsp;
       <input type ="checkbox"></input> 
       <label>drawing</label><br></br>
      
       <input type ="checkbox"></input> 
       <label>singing</label><br></br><br></br>
      
        <button><b>submit</b></button> 
      </form>
    </div>*/ 
    <div>
      <PropsClass collage="skct"></PropsClass>
      <PropsFunctional name="Avdrt"></PropsFunctional>
<PropsFunctional2 name="Avanthika" age="18"></PropsFunctional2> 
<PropsFunctional3 name="Amudha" age="44"></PropsFunctional3>
<ArrowProps place="Salem"></ArrowProps>
<StateClassCom/> 
<StateFunction/> 
<StateHoldObject/>  
<DynamicRendering/>
<TwoWayBinding/> 
<DefaultProps name="skct"></DefaultProps>
 </div>
  );
}

export default App;
