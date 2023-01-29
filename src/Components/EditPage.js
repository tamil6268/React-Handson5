import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';

const EditPage = () => {
    const context = useContext(DataContext);
    const location = useLocation();//we can get id by using location function(hook)
    const navigate = useNavigate();
    const index = (location.state.data);

    const newObject = {
        Name: context.entries[index].Name,
        Age: context.entries[index].Age,
        Course: context.entries[index].Course,
        Batch: context.entries[index].Batch,
    }
    const change = (item) => {
        newObject[item.target.name] = item.target.value;//by using name property we accessing the value in the object we want
    }
    const update = () => {
        console.log(context.entries[index])
        context.updateFunction(
            (oldObject) => {
                oldObject[index] = newObject;
                console.log(newObject)
                return (oldObject)
            }
        );
        navigate(-1);
    }
    return (
        <div id="row-1">
            <div id="row-1">
                <label for="Name">Name </label>
                <input onChange={change} name='Name' placeholder={context.entries[index].Name} />
                <label for="Name">Age  </label>
                <input onChange={change} name='Age' placeholder={context.entries[index].Age} />
            </div>
            <div id="row-1">
            <label for="Name">Course   </label>
                <input onChange={change} name='Course' placeholder={context.entries[index].Course} />
                <label for="Name">Batch   </label>
                <input onChange={change} name='Batch' placeholder={context.entries[index].Batch} />
            </div>


            <div id="row-1">
                <button onClick={update}>Update</button>
                <button onClick={()=>{navigate(-1)}}>Back</button>
            </div>
        </div>
    )
}
export default EditPage;