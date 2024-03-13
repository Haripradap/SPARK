import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className='input input-bordered rounded-full'/>
        <button type="Submit" className='btn btn-circle bg-sky-500 text-white'>
          <FaSearch/>
        </button>
    </form>
  )
}

export default SearchInput;



// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder="Search..." className='input input-bordered rounded-full'/>
//         <button type="Submit" className='btn btn-circle bg-sky-500 text-white'>
//           <FaSearch/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput;