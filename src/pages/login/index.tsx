"use client"
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import LoginView from './view';
import apiClient from '@/libs/axiosConfig';
import { LoginValues } from '@/type/data';

const Login: React.FC = () => {
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (values: LoginValues) => {
        try {
            setIsLoading(true);
            const response = await apiClient.post('/login', { email: values.email, password: values.password });
            const token = response.data.token;
            login(token);
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LoginView
            onSubmit={handleLogin}
            isLoading={isLoading}
        />
    );
};

export default Login;
