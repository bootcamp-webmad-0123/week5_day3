## AXIOS

  - Axios es una librería de gestión de peticiones AJAX integrable tanto en cliente usando su CDN como en un proyecto de npm mediante `npm i axios`
  - Está gestionada mediante promesas.
  
#### Emitir peticiones GET/DELETE:

  ```js
      axios.get("https://domain.com/final-endpoint")
        .then(response => console.log(response))
        .catch(err => console.log(err))
  ```

#### Emitir peticiones POST/PUT:

  ```js
      axios.post("https://domain.com/final-endpoint", dataToSend)
        .then(response => console.log(response))
        .catch(err => console.log(err))
  ```

#### Instanciando una URL base:

  ```js
    const axiosApp = axios.create({ 
       baseURL: "https://domain.com" 
    })
    
    axiosApp.get("/final-endpoint")
  ```

## Servicios

Un [servicio web](https://es.wikipedia.org/wiki/Servicio_web) es una tecnología que utiliza un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones. En un proyecto de desarrollo web es común encontrar los servicios encapsulados en una clase.
