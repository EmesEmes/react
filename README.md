# React

## Qué es React?
React es una biblioteca de JavaScript desarrollada por Facebook. Se utiliza para construir interfaces de usuario, especialmente para aplicaciones de una sola página. Permite a los desarrolladores crear componentes reutilizables de la interfaz de usuario, lo que facilita el desarrollo de aplicaciones complejas.

React es declarativo. En programación, un estilo declarativo se refiere a la programación con "qué" se debe hacer, en lugar de "cómo" se debe hacer. Cuando se programa con React, se define el estado final de la interfaz de usuario en el código, y React se encarga de determinar cómo cambiar la interfaz de usuario para que coincida con ese estado. Esto contrasta con un estilo imperativo, donde el desarrollador tendría que especificar exactamente cómo hacer cada cambio en la interfaz de usuario.



### Características y ventajas de usar React
1. __Component-based:__ React sigue un enfoque basado en componentes. Esto significa que una aplicación React se compone de numerosos componentes independientes, cada uno de los cuales tiene su propia lógica y controles.

2. __State-driven__: Se refiere a cómo el estado de un componente puede controlar cómo se renderiza y se comporta ese componente.

3. __Hooks:__ Los Hooks son una adición reciente a React que permite el uso de estado y otras características de React sin tener que escribir una clase. Esto puede hacer que el código sea más fácil de leer y escribir.

4. __Virtual DOM:__ React utiliza el Virtual DOM, que es una representación ligera del DOM real. Esto permite a React hacer actualizaciones y renderizado de manera eficiente.

5. __JSX:__ React utiliza JSX, una sintaxis que permite HTML y JavaScript coexistir. Esto hace que el código sea más fácil de entender y escribir.

6. __Unidireccionalidad de los datos:__ React sigue un flujo de datos unidireccional. Esto significa que un conjunto de datos inmutables se pasa a los componentes hijos a través de las propiedades. Esto hace que el seguimiento de los cambios y la depuración del código sea más fácil.

7. __Soporte para aplicaciones:__ Con React Native, los desarrolladores pueden usar el mismo estilo de componentes para crear aplicaciones móviles nativas.

8. __Comunidad activa y soporte:__ React tiene una comunidad de desarrolladores muy activa y un fuerte soporte de Facebook. Esto significa que hay una gran cantidad de recursos de aprendizaje disponibles y actualizaciones regulares a la biblioteca.

## Instalar React
Si se desea crear una nueva aplicación o un nuevo sitio web completamente con React, el equipo de React recomienda que se elija uno de los frameworks hechos con React y más populares en la comunidad. Los frameworks brindan funciones que la mayoría de las aplicaciones y los sitios eventualmente necesitan, incluido el enrutamiento, la obtención de datos y la generación de HTML.

### Vite
```
npm create vite@latest
```

### Next.js
```javascript
npx create-next-app@latest
```

### Remix
```javascript
npx create-remix
```

### Gatsby
```javascript
npx create-gatsby
```

# Consideraciones a tener en cuenta para emprezar con React

## react-dom
react-dom es una biblioteca de React que proporciona métodos específicos del DOM que pueden ser utilizados en el nivel más alto de tu aplicación como una forma de arrancar un árbol de componentes de React en un contenedor del DOM.

El método más comúnmente utilizado en react-dom es ReactDOM.render(), que se utiliza para renderizar un elemento React en un nodo del DOM. Aquí tienes un ejemplo de cómo se utiliza:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hola, mundo!</h1>;
}

// Renderiza el componente App en el elemento con id 'root'
ReactDOM.render(<App />, document.getElementById('root'));
```


## StrictMode 
StrictMode es una herramienta para destacar potenciales problemas en una aplicación React. No renderiza ningún contenido visible en la interfaz de usuario y activa comprobaciones y advertencias adicionales solo en el modo de desarrollo.

Se puede habilitar StrictMode para cualquier parte de la aplicación. Por ejemplo, para habilitarlo en toda la aplicación, se puede hacer algo como esto:

```javascript
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <div>
        {/* El resto de tu aplicación */}
      </div>
    </React.StrictMode>
  );
}

export default App;
```