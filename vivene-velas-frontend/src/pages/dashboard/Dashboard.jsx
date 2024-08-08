import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from "../../api";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

function Dashboard() {
    const [userData, setUserData] = useState(null);
    const [stats, setStats] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = sessionStorage.getItem('authToken');
                if (!token) {
                    throw new Error('Usuário não autenticado');
                }

                const response = await api.get('/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUserData(response.data);
            } catch (error) {
                toast.error('Erro ao carregar dados do usuário. Por favor, faça login novamente.');
                navigate('/login');
            }
        };

        const fetchStats = async () => {
            try {
                const response = await api.get('/dashboard/stats');
                setStats(response.data);
            } catch (error) {
                toast.error('Erro ao carregar estatísticas do dashboard.');
            }
        };

        fetchUserData();
        fetchStats();
    }, [navigate]);

    if (!userData) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <NavBar />
            <div className="dashboard-container">
                <h1>Bem-vindo, {userData.nome}</h1>
                <div className="stats-container">
                    <div className="stat-item">
                        <h3>Total de Usuários</h3>
                        <p>{stats.totalUsers}</p>
                    </div>
                    <div className="stat-item">
                        <h3>Total de Pessoas Cadastradas</h3>
                        <p>{stats.totalSignUps}</p>
                    </div>
                    <div className="stat-item">
                        <h3>Último Login</h3>
                        <p>{userData.lastLogin}</p>
                    </div>
                </div>
            </div>
            <Footer isSimple={false} />
        </>
    );
}

export default Dashboard;
