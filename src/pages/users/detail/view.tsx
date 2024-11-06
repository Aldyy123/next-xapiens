import { IUser } from "@/type/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface UserDetailCardProps {
    user: IUser | null;
    isLoading: boolean;
}

const UserDetailCard: React.FC<UserDetailCardProps> = ({ user, isLoading }) => {
    const navigate = useRouter();
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
                <p className="text-white text-xl">Loading user details...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
                <p className="text-white text-xl">User not found</p>
            </div>
        );
    }
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <Image
                src={user.avatar}
                width={400}
                height={400}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-32 h-32 mx-auto rounded-full shadow-md mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <div className="flex justify-center space-x-4 mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
                    Message
                </button>
                <button onClick={() => navigate.back()} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition">
                    Back to List
                </button>
            </div>
        </div>
    );
};

export default UserDetailCard;
