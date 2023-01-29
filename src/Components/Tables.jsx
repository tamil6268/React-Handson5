import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './DataContext';
// import AddPage from '../Components/AddPage';

const Tables = () => {
    const context = useContext(DataContext);//getting the data from created context
    return (
        <div>
            <div id="head">
                <h1>Students Details</h1>
                <button><Link to="/AddPage" style={{textDecoration:"none",color:"white",background:"rgb(27, 27, 92)"}}>Add new student</Link></button>
            </div>
            <div>
                <table border={1} cellSpacing={0.5}>
                    <thead>
                    <tr id="th">
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        context.entries.map((item, index) => (
                            <tr id="tr" key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Course}</td>
                                <td>{item.Batch}</td>
                                <td><Link to="/EditPage" state={{ data: index }}>Edit</Link></td>
                            </tr>
                        ))
                    }
                    </tbody>
                    <tfoot>
                     
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default Tables;

























// <tr>
//                         <td>John</td>
//                         <td>26</td>
//                         <td>MERN</td>
//                         <td>October</td>
//                         <td><Link to="/EditPage"state={{ data: index }}>Edit</Link></td>
//                     </tr>
//                     <tr>
//                         <td>Doe</td>
//                         <td>24</td>
//                         <td>MERN</td>
//                         <td>November</td>
//                         <td><Link to="/EditPage"state={{ data: index }}>Edit</Link></td>
//                     </tr>
//                     <tr>
//                         <td>Biden</td>
//                         <td>26</td>
//                         <td>MERN</td>
//                         <td>September</td>
//                         <td><Link to="/EditPage"state={{ data: index }}>Edit</Link></td>
//                     </tr>
//                     <tr>
//                         <td>Barar</td>
//                         <td>25</td>
//                         <td>MERN</td>
//                         <td>November</td>
//                         <td><Link to="/EditPage"state={{ data: index }}>Edit</Link></td>
//                     </tr>
//                     <tr>
//                         <td>Christ</td>
//                         <td>23</td>
//                         <td>MERN</td>
//                         <td>October</td>
//                         <td><Link to="/EditPage"state={{ data: index }}>Edit</Link></td>
//                     </tr>
//                     <tr>
//                         <td>Elent</td>
//                         <td>24</td>
//                         <td>MERN</td>
//                         <td>September</td>
//                         <td><Link to="/EditPage"state={{ data: index }}>Edit</Link></td>
//                     </tr>