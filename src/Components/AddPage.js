import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext';
import { useContext } from 'react';

const AddPage = () => {
    let context=useContext(DataContext);
    const navigate = useNavigate();
    const [inputData, setInputdata] = useState({
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    });
    const [inputStore,setInputstore] =useState([]);
    const changeHandle = (event) => {
        setInputdata({ ...inputData, [event.target.name]: event.target.value })
        console.log()
    }
    let {Name,Age,Course,Batch}=inputData;
    const AddStudents = () => {
        setInputstore([...inputStore,{Name,Age,Course,Batch}])
        console.log(inputData)
        setInputdata({Name:"",Age:"",Course:"",Batch:""})
            context.entries.push(inputData)
            navigate('/Students')
    }
    return (
        <div>
            <div id="row-container">
                <div id="row-1">
                    <label for="Name">Name </label><br/>
                        <input  name='Name' placeholder='Enter Name' type="text" value={inputData.Name} onChange={changeHandle} />
                    <label for="Name">Age </label><br/>
                        <input name='Age' placeholder='Enter Age' type="number" value={inputData.Age} onChange={changeHandle} />
                </div>
                <div id="row-2">
                    <label for="Name">Course </label><br/>
                        <input name='Course' placeholder='EnterCourse'
                            type="text" value={inputData.Course} onChange={changeHandle} />
                    <label for="Name">Batch </label><br/>
                        <input name='Batch' placeholder='Enter Batch' type="text" value={inputData.Batch} onChange={changeHandle}/>
                </div>


                <div id="row-3">
                    <button type="submit" onClick={AddStudents}>Add</button>
                    <button onClick={()=>{navigate(-1)}}>Back</button>
                </div>
            </div>
        </div>
    )
}
export default AddPage;