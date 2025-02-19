export type User = {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'business' | 'individual';
};

export type Business = {
    id: string;
    name: string;
    description: string;
    services: string[];
};

export type Content = {
    id: string;
    title: string;
    body: string;
    authorId: string;
    status: 'pending' | 'approved' | 'rejected';
};

export type Settings = {
    siteTitle: string;
    siteDescription: string;
    adminEmail: string;
};