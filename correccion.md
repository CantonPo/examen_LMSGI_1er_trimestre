# Exammen

## Teoria
4/10, hay algunos conceptos que tienes aún poco claros, html y css tienen **mucho** contenido aunque sean simples, date un repaso de los aspectos básicos de html y css a ratos en navidad, te ayudará mucho!

## Práctica

Falta hacer un reset para que se vea correctamente cada seccion ocupando la pantalla:

```css
*{
    margin: 0;
    padding: 0;
}
```

Además, es buena idea eliminar contenido que nos ha ayudado a desarrollar la aplicación pero no es necesario para el resultado final, eliminar console.logs, o contadores que no han sido pedidos en el enunciado.

También es buena idea no dejar una fuente por defecto.

La estructura html esta bien! Aunque las clases podrían tener mejor lógica:

- Los nombres contenedor1, contenedor2 y contenedor3 nos pueden ayudar en el desarrollo por ser sencillos, pero los nombres son muy poco descriptivos y no te permitirán escalar a aplicaciones más grandes.
- Bastante menos importante por el tamaño de este ejercicio, pero es buena idea agrupar comportamientos comunes en clases unicas, en tu caso, los tres contenedores tienen todos el mismo comportamiento menos el color de fondo, en lugar de repetir el mismo código tres veces, es buena idea crear una clase separada que contenga el comportamiento común, y luego una clase con el color de fondo que queramos:

```css
.contenedor{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contenedor1{
    background-color: red;
}

.contenedor2{
    background-color: green;
}

.contenedor3{
    background-color: blue;
}
```

Mucho más simple, y con menos texto cuando tengamos que volver a leer nuestras clases!

## Documentación

Relativamente bien en cuanto al orden que has seguido, pero hay poca referencia de como resolviste los problemas enseñando código, y no hay apenas uso de markdown.

Nota: 6