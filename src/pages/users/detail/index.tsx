import { useParams } from 'next/navigation';
import UserDetailCard from './view';
import { useCallback, useEffect, useState } from 'react';
import { IUser } from '@/type/data';
import apiClient from '@/libs/axiosConfig';

const UserDetailPage = () => {
    const params = useParams();
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    const getUserDetail = useCallback(async () => {
        try {
            const response = await apiClient.get(`/users/${params?.id}`);
            setUser(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user detail:', error);
            setLoading(false);
        }
    }, [params]);

    useEffect(() => {
        if (params?.id) {
            getUserDetail();
        }
    }, [params, getUserDetail]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <UserDetailCard user={user} isLoading={loading} />
        </div>
    );
};

export default UserDetailPage;
