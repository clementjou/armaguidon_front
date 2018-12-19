export function getDashboard(username) {
    if (username) {
        fetch('http://localhost:5000/api/users').then((res)=>{
            return res.json();
        }).then((data)=>{
            return data;
        })
    }
}