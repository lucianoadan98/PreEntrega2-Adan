const productList = []; // Arreglo para almacenar productos y precios
        let option = ""; // Variable para controlar la opción elegida por el usuario
        let Buttonstart = false;


        // Función para agregar un producto con valor a la lista
        function addProduct() {
            const productName = prompt("Ingrese el nombre del producto:"); // Solicita el nombre del producto al usuario
            const productValue = parseFloat(prompt("Ingrese el precio del producto:")); // Solicita el valor del producto al usuario

            if (!isNaN(productValue)) {
                productList.push({ name: productName, value: productValue }); // Agrega el producto al arreglo productList
                alert("¡Nuevo producto agregado!"); // Muestra una alerta de confirmación
            } else {
                alert("Por favor, ingrese un precio válido para el producto.");
            }
        }

        // Función para editar un producto existente en la lista
        function editProduct() {
            const index = parseInt(prompt("Ingrese el número de producto a editar:")); // Solicita el número de producto al usuario
            if (!isNaN(index) && index >= 1 && index <= productList.length) {
                const productName = prompt("Ingrese el nuevo nombre del producto:"); // Solicita el nuevo nombre al usuario
                const productValue = parseFloat(prompt("Ingrese el nuevo precio del producto:")); // Solicita el nuevo precio al usuario
                if (!isNaN(productValue)) {
                    productList[index - 1] = { name: productName, value: productValue }; // Realiza la edición del producto
                    alert("Producto editado."); // Muestra una alerta de confirmación
                } else {
                    alert("Por favor, ingrese un precio válido para el producto.");
                }
            } else {
                alert("Número de producto incorrecto.");
            }
        }

        // Función para editar el valor de un producto existente en la lista
        function editProductValue() {
            const index = parseInt(prompt("Ingrese el número de producto cuyo precio desea editar:")); // Solicita el número de producto al usuario
            if (!isNaN(index) && index >= 1 && index <= productList.length) {
                const product = productList[index - 1];
                const newProductValue = parseFloat(prompt(`Ingrese el nuevo precio para "${product.name}":`)); // Solicita el nuevo valor al usuario
                if (!isNaN(newProductValue)) {
                    product.value = newProductValue; // Realiza la edición del valor del producto
                    alert(`precio de "${product.name}" editado a $${newProductValue.toFixed(2)}.`); // Muestra una alerta de confirmación
                } else {
                    alert("Por favor, ingrese un precio válido para el producto.");
                }
            } else {
                alert("Número de producto incorrecto.");
            }
        }

        // Función para eliminar un producto de la lista
        function deleteProduct() {
            const index = parseInt(prompt("Ingrese el número de producto a eliminar:")); // Solicita el número de producto al usuario
            if (!isNaN(index) && index >= 1 && index <= productList.length) {
                const productName = productList[index - 1].name;
                if (confirm(`¿Seguro que desea eliminar el producto "${productName}"?`)) { // Muestra una alerta de confirmación
                    productList.splice(index - 1, 1); // Elimina el producto del arreglo
                    alert("Producto eliminado."); // Muestra una alerta de confirmación
                }
            } else {
                alert("Número de producto incorrecto.");
            }
        }

        // Función para mostrar todos los productos con valores en una alerta
        function showProducts() {
            let message = "Lista de Compras con Valores:\n\n";
            for (let i = 0; i < productList.length; i++) {
                const product = productList[i];
                message += `${i + 1}. ${product.name} - precio: $${product.value.toFixed(2)}\n`; // Construye el mensaje con la lista de productos
            }
            alert(message); // Muestra una alerta con la lista de productos
        }

        // Bucle do-while para la interacción del usuario
        function startProgram() {
            Buttonstart = true;
            do {
                option = prompt(`
          1- Agregar Producto.
          2- Editar Producto.
          3- Editar precio de Producto.
          4- Eliminar Producto.
          5- Ver Productos.
          6- Salir. `);
                if (option === "1") {
                    addProduct();
                } else if (option === "2") {
                    editProduct();
                } else if (option === "3") {
                    editProductValue();
                } else if (option === "4") {
                    deleteProduct();
                } else if (option === "5") {
                    showProducts();
                }
            } while (option !== "6");
        }