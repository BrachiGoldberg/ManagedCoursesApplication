

export class User {
    id: number | undefined;
    identity: string | undefined;
    name: string | undefined;
    address: string | undefined;
    email: string | undefined;
    password: string | undefined;
    isLecturer: boolean | undefined;
}


export const USERS: User[] = [
    {
        id: 1, identity: "123456789", name: "brachi", address: "brachi address",
        email: "brachi@gmail.com", password: "brachi", isLecturer: true
    },
    {
        id: 2, identity: "987654321", name: "ayala", address: "ayala address",
        email: "ayala@gmail.com", password: "ayala", isLecturer: true
    },
    {
        id: 3, identity: "456798123", name: "sari", address: "sari address",
        email: "sari@gmail.com", password: "sari", isLecturer: true
    },
    {
        id: 4, identity: "456123789", name: "shosi", address: "shosi address",
        email: "shosi@gmail.com", password: "shosi", isLecturer: true
    },
    {
        id: 5, identity: "444444444", name: "someone", address: "someone address",
        email: "someone@gmail.com", password: "someone", isLecturer: false
    },
]