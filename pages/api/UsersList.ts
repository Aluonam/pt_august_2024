
export interface UsersPropsType {
    id: 1,
    name: string,
    username: string,
    email: string,
        address: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: number,
                lng: number
                }
        }
}

const fetchUsers = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) {
        throw new Error('Failed fetch to do')
    }
    return response.json()
}

export {fetchUsers}