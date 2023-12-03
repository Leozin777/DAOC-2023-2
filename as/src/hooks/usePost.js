async function usePost(data, url){
    const valoresData = Object.values(data)

    for(const valor of valoresData){
        if(!valor){
            alert("Todos os campos devem ser preenchidos.")
            return
        }
    }

    await fetch(url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export default usePost