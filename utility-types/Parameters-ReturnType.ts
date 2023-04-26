/**
 * Parameters<Type>
 * Constructs a tuple type from the types used in the parameters of a function type Type
 * 
 */
function createUser({username, password} : {username : string, password: string}){
    return {
        username, password, 
    }
}

type CreateUserInput = Parameters<typeof createUser>[number]

const data: CreateUserInput = {username: "name", password: "!234"}

createUser(data);



/**
 * ReturnType<Type>
 * Constructs a type considered of the return type of function Type
 */

async function createUserReturn({username, password} : {username : string, password: string}){
    return {
        username, password, text: 1223
    }
}
type CreateUserResult  =  Awaited<ReturnType<typeof createUserReturn>>