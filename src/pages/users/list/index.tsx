import { useEffect, useState } from "react";
import UserList from "./view";
import { IUser } from "@/type/data";
import apiClient from "@/libs/axiosConfig";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getListUser = async () => {
        try {
            const response = await apiClient.get(`/users`);
            setUsers(response.data.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getListUser();
    }, []);

    return (
        <div className="min-h-screen p-8 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <UserList users={users} loading={loading} />
        </div>
    );
};

export default Users;
