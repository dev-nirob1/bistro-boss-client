import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTiltle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = id => {
        console.log(id)
        axiosSecure.delete(`/menu/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    console.log(res.data)
                    refetch()
                    Swal.fire(
                        'Good job!',
                        'Item Deleted',
                        'success'
                    )
                }
            })
    }
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="---Hurry up---"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td><img className="w-16 h-16" src={item.image} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Link>Edit</Link></td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost bg-red-600 text-xl text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;