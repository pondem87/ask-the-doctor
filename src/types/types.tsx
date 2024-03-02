
// type for users
export type User = {
    id: number,
    email: string,
    title?: string,
    name: string,
    surname?: string,
    profession?: string,
    is_professional: boolean,
    is_verified_professional: boolean,
    is_admin: boolean,
    address?: string,
    contact?: string 
}