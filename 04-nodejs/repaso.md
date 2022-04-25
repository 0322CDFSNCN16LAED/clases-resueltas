# Repaso clase 4

## Tipos de datos

- number
- string
- boolean

---

- NaN
- undefined
- null

---

- object
- array
- FUNCTION

Formato del dato, valor que tiene una variable

Las caracteristicas que tiene una informacion que le permite al sistema hacer diferentes cosas

```js
let x = undefined;

const array = ["banana", "manzana", null];

console.log(array[0]); //banana
console.log(array[2]); //null
console.log(array[3]); //undefined
```

---

## Operadores

### Todos los tipos de datos

#### Asignacion

- `=`

#### Comparacion

- `==`
- `>`
- `<`
- `<=`
- `>=`
- `!=`
- `===`

```js
3 != "3"; //false
```

#### Logicos

- `&&` - AND
- `||` - OR
- `!` - NOT

### Dependientes de Tipo de dato

#### Aritmeticos

##### Strings Y Numbers

- `+` b = b + 5
- `+=` b += 5

##### Solo Numbers

- `-`
- `/`
- `*`
- `%`
- `++`
- `-=`

```js
let x = "4";
x -= 5;

console.log(x);
```

---

## Funciones

Es bloque de codigo reutilizable

```js
unaFuncionReCopada();
function unaFuncionReCopada() {}

const unaFuncionReCopada2 = function () {};
unaFuncionReCopada2();
```
