const API = "http://localhost:8080";

// ==========================
// BOOKS
// ==========================

async function addBook() {
    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        price: Number(document.getElementById("price").value)
    };

    const response = await fetch(`${API}/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });

    if (response.ok) {
        alert("Book added successfully!");
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("price").value = "";
        getBooks();
    } else {
        alert("Failed to add book");
    }
}

async function getBooks() {
    const response = await fetch(`${API}/books`);
    const books = await response.json();

    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(book => {
        bookList.innerHTML += `
            <div class="book">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: Rs. ${book.price}</p>
                <p>ID: ${book.id}</p>
            </div>
        `;
    });
}

async function getBookById() {
    const id = document.getElementById("bookId").value;

    const response = await fetch(`${API}/books/${id}`);
    const singleBook = document.getElementById("singleBook");

    if (response.ok) {
        const book = await response.json();

        singleBook.innerHTML = `
            <div class="book">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: Rs. ${book.price}</p>
                <p>ID: ${book.id}</p>
            </div>
        `;
    } else {
        singleBook.innerHTML = "<p>Book not found.</p>";
    }
}

async function deleteBook() {
    const id = document.getElementById("deleteBookId").value;

    const response = await fetch(`${API}/books/${id}`, {
        method: "DELETE"
    });

    const message = document.getElementById("deleteMessage");

    if (response.ok) {
        message.innerText = "Book deleted successfully!";
        document.getElementById("deleteBookId").value = "";
        getBooks();
    } else {
        message.innerText = "Failed to delete book.";
    }
}


// ==========================
// CUSTOMERS
// ==========================

async function addCustomer() {
    const customer = {
        name: document.getElementById("customerName").value,
        email: document.getElementById("customerEmail").value,
        phone: document.getElementById("customerPhone").value
    };

    const response = await fetch(`${API}/customers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    });

    if (response.ok) {
        alert("Customer added successfully!");

        document.getElementById("customerName").value = "";
        document.getElementById("customerEmail").value = "";
        document.getElementById("customerPhone").value = "";

        getCustomers();
    } else {
        alert("Failed to add customer");
    }
}

async function getCustomers() {
    const response = await fetch(`${API}/customers`);
    const customers = await response.json();

    const customerList = document.getElementById("customerList");
    customerList.innerHTML = "";

    customers.forEach(customer => {
        customerList.innerHTML += `
            <div class="book">
                <h3>${customer.name}</h3>
                <p>Email: ${customer.email}</p>
                <p>Phone: ${customer.phone}</p>
                <p>ID: ${customer.id}</p>
            </div>
        `;
    });
}

async function getCustomerById() {
    const id = document.getElementById("customerId").value;

    const response = await fetch(`${API}/customers/${id}`);
    const singleCustomer = document.getElementById("singleCustomer");

    if (response.ok) {
        const customer = await response.json();

        singleCustomer.innerHTML = `
            <div class="book">
                <h3>${customer.name}</h3>
                <p>Email: ${customer.email}</p>
                <p>Phone: ${customer.phone}</p>
                <p>ID: ${customer.id}</p>
            </div>
        `;
    } else {
        singleCustomer.innerHTML = "<p>Customer not found.</p>";
    }
}

async function deleteCustomer() {
    const id = document.getElementById("deleteCustomerId").value;

    const response = await fetch(`${API}/customers/${id}`, {
        method: "DELETE"
    });

    const message = document.getElementById("customerDeleteMessage");

    if (response.ok) {
        message.innerText = "Customer deleted successfully!";
        document.getElementById("deleteCustomerId").value = "";
        getCustomers();
    } else {
        message.innerText = "Failed to delete customer.";
    }
}