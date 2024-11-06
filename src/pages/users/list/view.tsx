import { IUser } from '@/type/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface UserListProps {
    users: IUser[];
    loading: boolean;
}

const UserList: React.FC<UserListProps> = ({ users, loading }) => {
    const router = useRouter();

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-6">User List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">ID</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Name</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Email</th>
                            <th className="py-3 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b border-gray-200">{user.id}</td>
                                <td className="py-3 px-4 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <Image src={user.avatar} alt="Avatar" height={400} width={400} className="w-8 h-8 rounded-full mr-3" />
                                        <span>{user.first_name} {user.last_name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 border-b border-gray-200">{user.email}</td>
                                <td className="py-3 px-4 border-b border-gray-200">
                                    <button
                                        onClick={() => router.push(`/users/${user.id}`)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
