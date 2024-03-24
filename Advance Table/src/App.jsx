
import { useState } from "react";
import { FaSort } from "react-icons/fa6";
const peoples = [
  {name: "Sahil Ali",position:"Software Engineer", office :"Tokyo", age:"22", startdate:"2024/07/01", salary:"162700"},
  {name: "Saif Ali",position:"Software Engineer", office :"Tokyo", age:"22", startdate:"2024/07/01", salary:"162700"},
  {name: "Rahul Kumar",position:"Software Engineer", office :"Tokyo", age:"22", startdate:"2024/07/01", salary:"162700"},
  {name: "Owais Khan",position:"Software Engineer", office :"Tokyo", age:"22", startdate:"2024/07/01", salary:"162700"},
  {name: "Lucky Ali",position:"Software Engineer", office :"Tokyo", age:"22", startdate:"2024/07/01", salary:"162700"},
  {name: "Sahil Ali",position:"Software Engineer", office :"Tokyo", age:"22", startdate:"2024/07/01", salary:"162700"},
  {name: "Sahil Ali",position:"Software Engineer", office :"Tokyo", age:"22", startdate:"2024/07/01", salary:"162700"},
]
function App() {
  const [filterdata, setfilterdata] = useState(peoples)
  const [searchValue, setsearchValue] = useState("")

  

  const handlesearch = (e) => {
    const searchValue = e.target.value.toLowerCase(); // Convert search value to lowercase
    setsearchValue(e.target.value);
    console.log(searchValue);
    const filteredPeople = peoples.filter((person) => {

        return person.name.toLowerCase().includes(searchValue) || person.position.toLowerCase().includes(searchValue)
        || person.office.toLowerCase().includes(searchValue); // Convert name to lowercase for comparison
    });
    setfilterdata(filteredPeople)
}


  
  return (
    <>
    <div className="flex justify-end mt-4 mr-32">
  {/* <div className="flex justify-end"> */}
    <label htmlFor="search" className="mr-2">Search:</label>
    <input type="text" id="search" className="px-1 border border-gray-400" onChange={handlesearch} value={searchValue}></input>
  </div>
{/* </div> */}


  
  <div className="flex justify-center mt-4">
    
   {/* <h1>Advance table</h1> */}
      <table className="text-left border ">
    <thead>
        <tr>
          <th className="border px-2 py-2">
          <div className="flex justify-between">
          <span className="mr-20">Name </span>
          <FaSort className="ml-4 mt-1 w-2"/>
          </div>
        
          
          </th>
          <th className="border px-2"> 
           <div className="flex justify-between">
          <span className="mr-20">Position </span>
          <FaSort className="ml-4 mt-1 w-2"/>
          </div> </th>
          <th className="border px-2">
             <div className="flex justify-between">
          <span className="mr-20">Office </span>
          <FaSort className="ml-4 mt-1 w-2"/>
          </div> </th>
          <th className="border px-2">
             <div className="flex justify-between">
          <span className="mr-20">Age </span>
          <FaSort className="ml-4 mt-1 w-2"/>
          </div> </th>
          <th className="border px-2">
             <div className="flex justify-between">
          <span className="mr-20">Start date </span>
          <FaSort className="ml-4 mt-1 w-2"/>
          </div> </th>
          <th className="border px-2">
             <div className="flex justify-between">
          <span className="mr-20">Salary </span>
          <FaSort className="ml-4 mt-1 w-2"/>
          </div>  </th>
        </tr>
    </thead>
    <tbody>
      {filterdata.length == 0? <tr className="text-center">
  <td colSpan="6">No Data Found</td>
</tr>

: filterdata.map((people, index)=>(
        <tr key={index} className={`border ${index%2 ==0? 'bg-gray-100': ''}`}>
            <td  className="border-r px-2   py-2">{people.name}</td>
            <td  className="border-r px-2  py-2">{people.position}</td>
            <td  className="border-r px-2 py-2 ">{people.office}</td>
            <td  className="border-r px-2  py-2">{people.age}</td>
            <td  className="border-r px-2  py-2">{people.startdate}</td>
            <td  className="border-r px-2  py-2">{people.salary}</td>
        </tr>
      ))}   
      </tbody>
   </table>
      </div>

      </>
  )
}

export default App