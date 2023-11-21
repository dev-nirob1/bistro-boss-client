import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTiltle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
    }

    const handleDeleteUser = id => {
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            if(data.deletedCount){
                Swal.fire(
                    'Good job!',
                    'User Deleted',
                    'success'
                )
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss || All Users</title>
            </Helmet>
            <SectionTitle heading="MANAGE ALL USERS" subHeading="---How many??---"></SectionTitle>
            <div className="bg-white p-8 mx-10">
                <h2 className="text-3xl font-semibold mb-5">Total Users: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost bg-[#D1A054] text-xl text-white"><FaUsers /></button>}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost bg-red-600 text-xl text-white"><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;