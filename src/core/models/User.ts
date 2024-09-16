export interface User {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt?: string;
    first_name: string;
    last_name: string;
    dni: string;
    phone: string;
    email: string;
    city: string;
    gender: string;
    age: number;
    deleted: boolean;
  }