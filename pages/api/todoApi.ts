
export interface TodoPropsType {
    id: number;
    title: string;
    completed: boolean;
  }

const fetchTodos = async ()=>{
    const response = await fetch('/api/todos');
    if(!response.ok) {
        throw new Error('Failed fetch to do')
    }
    return response.json()
}

export {fetchTodos}