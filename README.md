<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Libros Favoritos Backend

## Requisitos

- Node.js (>= 18.x)
- Nest CLI (>= 10.x)

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/ingluis-code/Backend-App.git
    cd backend-app
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```
3. Renombrar el archivo ```.env.template``` a ```.env``` y cambiar las variables de entorno
4. Levantar la base de datos ```docker-compose up -d```

5. Ejecuta la aplicación en modo desarrollo:

    ```sh
    npm run start:dev
    ```

    La API estará disponible en `http://localhost:3000`.

## Docker

### Construir y ejecutar con Docker

1. Construye la imagen de Docker:

    ```sh
    docker build -t backend-api .
    ```

2. Ejecuta el contenedor de Docker:

    ```sh
    docker run -d -p 3000:3000 backend-api
    ```

3. Construir y ejecutar los contenedores usando ```docker-compose```

    ```sh
    docker-compose up --build
    ```
4. Finalmente podemos ejecutar el contenedor de la base de datos,
   El contenedor de el backend y frontend usando el archivo docker-compose.yml y 
   la siguiente estructura de carpetas.

    fullstack-app/ 

    ├── frontend-app/    # Proyecto Angular (Frontend) 
    
    ├── backend-app/ # Proyecto NestJS (Backend) 
    
    └── docker-compose.yml # Archivo de Docker Compose para orquestar ambos servicios

    ```sh
    docker-compose up --build
    ```

    La API estará disponible en `http://localhost:3000`.
    
    La Base de datos estará disponible en `localhost:5432`.


## Endpoints

- `GET /api/books` - Obtener todos los libros
- `POST /api//books` - Añadir un nuevo libro
- `PUT /api//books/:id` - Actualizar un libro existente
- `DELETE /api//books/:id` - Eliminar un libro
- `GET /api/books/search/:param` - Buscar un libro por id o por titulo

## Contacto

Si tienes alguna pregunta o sugerencia, por favor abre un issue o contacta a [ingordillo2@gmail.com].


- Author - [Luis Alberto Gordillo Gutierrez](www.linkedin.com/in/ingordillo1997)
