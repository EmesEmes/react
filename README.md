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


## Componentes
Un componente en React es una unidad independiente de código que devuelve un elemento React (generalmente representado por JSX) que forma parte de la interfaz de usuario. Los componentes son la base de las aplicaciones React y permiten dividir la interfaz de usuario en piezas reutilizables e independientes.

* Un componente tiene sus propios datos, lógica y apariencia.

* Lo componentes deben retornar un solo bloque de JSX que React utilizará para renderizar te componente dentro de la UI.

#### Propiedades de los componentes:
1. Reutilizables: Los componentes pueden ser reutilizados en diferentes partes de una aplicación. Esto permite un desarrollo más rápido y un código más limpio y mantenible.

2. Componibles: Los componentes pueden ser anidados dentro de otros componentes para construir interfaces de usuario complejas. Esto permite una estructura de aplicación clara y fácil de entender.

3. Estado y Ciclo de Vida: Los componentes en React pueden tener estado interno y métodos de ciclo de vida (en componentes de clase) o hooks (en componentes funcionales) que permiten manejar la lógica de la aplicación de manera efectiva.

4. Props: Los componentes pueden recibir props de sus componentes padres. Esto permite la comunicación entre componentes y hace que los componentes sean configurables para diferentes usos.

5. JSX: Los componentes de React se suelen escribir con JSX, una extensión de sintaxis para JavaScript que permite escribir HTML en tu código JavaScript. Esto hace que los componentes sean más legibles y fáciles de escribir.

6. Virtual DOM: React utiliza el Virtual DOM para hacer que el renderizado de los componentes sea más eficiente. Cuando el estado de un componente cambia, React solo actualiza las partes del DOM real que necesitan ser actualizadas, en lugar de volver a renderizar todo el componente.

7. Unidireccionalidad de los datos: React sigue un patrón de flujo de datos unidireccional. Esto significa que un componente padre pasa las props a los componentes hijos, pero los componentes hijos no pueden modificar directamente las props que reciben. Esto hace que el flujo de datos sea más predecible y fácil de rastrear.


## JSX
JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que se utiliza comúnmente en React para describir cómo debería ser la interfaz de usuario. Permite escribir HTML en el código JavaScript, lo que hace que el código sea más legible y fácil de entender.

Es un sintaxis declarativa que describe como se verán los componentes y como funcionarán basado en su lógica y datos. Al decir que es una sintaxis declarativa se refiera a que usamos JSX para decirle a React como queremos que se vea la UI pero no como hacerlo paso a paso ya que React puede resolverlo por sí mismo.



### Reglas generales de JSX
1. JSX funciona escencialmente como HTML, pero podemos entrar en "modo JavaScript" usando {}.
2. Dentro de {} podemos utilizar expresiones de JavaScript como por ejemplo: referenciar variables, crear arrays u objetos y utilizar sus respectivos métodos, operadores ternarios, etc. 
3. Lo que no se puede usar dentro de {} son declaraciones de JavaScript como if/else, for, switch, etc.
4. Lo más importante de entender es que JSX produce una expresión de JsvaScript, o entroas palabras, JSX is justamente como cualquier otra expresión de JavaScript.
5. Esto tiene sentido ya que JSX es simplemete convertido a una llamada a la función "create-element", que es de hecho una expresión. esto tiene dos implicaciones:
    1. Podemos colocar otras piezas de JSX dentro {}.
    2. Podemos escribir JSX en cualquier lugar dentro de un componente.
6. Una pieza de JSX puede retornar solamente un elemento de un componente, si se necesita retornar más de uno se debe usar `<React.Fragment>` o fragmento.

> La principal diferencia expresiones y declaraciones es que una expresión produce un valor y puede ser utilizada en lugares donde se espera un valor, mientras que una declaración realiza una acción y no produce un valor directamente.

#### Diferencia entre JSX y HTML
1. Se debe usar `className` en lugar de `class`.
2. Cada tag debe ser cerrado siempre. Por ejemplo `<img />` o `<br />`.
3. Todos los controladores de eventos y otras propiedes deben ser escritas en **camelCase**. Por ejemplo `onClick` o `onMouseOver`. Con excepción de `aria-*` y `data-*` que son escritos con guiones como en HTML.
4. El CSS en línea debe ser escrito así: `{{<style>}}`.
5. Las propiedades de CSS también deben ser escritas en camelCase.
6. Los comentarios deben ir dentro de {} ya que tambien son JavaScript.


## Props
Los props (abreviatura de propiedades) en React son la forma de pasar datos de los componentes padres a los componentes hijos. Son similares a los argumentos de una función en JavaScript puro.

Los props son inmutables, lo que significa que un componente hijo no puede modificar los props que recibe de su componente padre. Esto es importante para mantener un flujo de datos unidireccional y predecible en tu aplicación.

* Ejemplo de un prop:
```javascript
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

// Uso del componente
<Saludo nombre="Mundo" />
```

Además de los datos, también se puede pasar funciones como props para permitir la comunicación de los componentes hijos con los componentes padres. Esto es útil para cosas como manejar eventos de usuario.


## Fragments
Un Fragment en React es un tipo de componente que permite agrupar una lista de hijos sin agregar nodos extra al DOM.

Cuando se renderiza múltiples elementos a la vez, normalmente los se envuelve en un contenedor div. Pero a veces, envolver elementos en un div puede arruinar la semántica del HTML, especialmente en situaciones donde los elementos deben ser hijos directos de un elemento específico, como en una lista (`<ul>` o `<ol>`).

Aquí es donde los Fragments son útiles. Se puede envolver múltiples elementos en un Fragment y React no agregará un nodo extra al DOM.

```javascript
import React, { Fragment } from 'react';

function MiComponente() {
  return (
    <Fragment>
      <h1>Mi título</h1>
      <p>Mi párrafo</p>
    </Fragment>
  );
}
```

También se puede usar una sintaxis más corta para los Fragments, que es simplemente <> y </>:
```javascript
function MiComponente() {
  return (
    <>
      <h1>Mi título</h1>
      <p>Mi párrafo</p>
    </>
  );
}
```