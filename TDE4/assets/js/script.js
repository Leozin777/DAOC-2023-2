function ready()
{
    home();
    document.getElementById("sobre").addEventListener("click", sobre);
    document.getElementById("home").addEventListener("click", home);
    document.getElementById("contato").addEventListener("click", contato);
}

function home() {
    const sessao = document.getElementById("sessao");

    let nome = "leo";
    console.log(nome);

    sessao.innerHTML = `
        <h1>pagina home</h1>
    `
}

function sobre() {
    const sessao = document.getElementById("sessao");

    let nome = "leo";
    console.log(nome);

    sessao.innerHTML = `
        <h1>pagina sobre</h1>
    `
}

function contato(){
    const sessao = document.getElementById("sessao");

    let nome = "leo";
    console.log(nome);

    sessao.innerHTML = `
    <h1> Contact </h1>
    <form>
        <div class="form-group"></div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone" required><br><br>

        <button type="button" class="btn-primary" id="submmitButton">Submit</button>
    </form>
    `
    const clickSubmit = document.getElementById("submmitButton").addEventListener("click", submitForm)
}

function submitForm(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    const contact = {name: name.value, email: email.value, phone: phone.value};

    const session = document.getElementById("sessao");

    session.innerHTML = `
        <table>
        
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td>${contact.phone}</td>
                </tr>
            </tbody>

        </table>
    `
}
