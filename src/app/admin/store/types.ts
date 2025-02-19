export type AdminDashboardState = {
    statistics: {
        totalUsers: number;
        totalBusinesses: number;
        totalContent: number;
    };
    loading: boolean;
    error: string | null;
};

export type User = {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
};

export type Business = {
    id: string;
    name: string;
    services: string[];
    isActive: boolean;
};

export type Content = {
    id: string;
    title: string;
    status: 'pending' | 'approved' | 'rejected';
};

export type Settings = {
    siteName: string;
    maintenanceMode: boolean;
};