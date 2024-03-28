export default async function register(userEmail: string, userPassword: string,tel:string,name:string) {
    const response = await fetch(`http://localhost:7777/api/v1/auth/register`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email:userEmail,
            password:userPassword,
            tel:tel,
            name:name
        })
    })
    return await response.json()
}