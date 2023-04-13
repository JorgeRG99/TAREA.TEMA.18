- Publicamos el respositorio de nuestro proyecto en gitHub.

- Crearemos la rama "Develop", para ello en la pestaña de "Source Control" seleccionaremos "Branch" y dentro de este desplegable haremos click en la opcion "Create Branch..." le damos nombre y publicamos la rama. (git checkout -b Develop)

- El primer cambio de nuestra rama Develop, lo realizaremos en el archivo App.css, cambiando la propiedad color de la clase work-color, hacemos commit y push para actualizar la rama. (git add)(git commit -m "Mensaje")(git push origin Develop)

- El equipo decide crear una nueva funcionalidad, por lo que crearemos una nueva rama "Feature1", de la forma vista anteriormente. (git branch), con esto comprobaremos que estamos en la rama Develop y a continuación (git checkout -b Feature1)

- El primer cambio en esta rama lo haremos sobre el titulo de la pagina, en el archivo App.jsx, hacemos el commit y push para actualizar la rama. (git add)(git commit -m "Mensaje")(git push origin Feature1)

- El segundo lo realizaremos de nuevo en el archivo App.jsx, hacemos el commit y push para actualizar la rama. (git add)(git commit -m "Mensaje")(git push)

- El tercero y último lo realizaremos de la misma forma sobre el archivo App.jsx, hacemos el commit y luego push para actualizar la rama. (git add)(git commit -m "Mensaje")(git push)

- En el equipo vemos la necesidad de crear una rama nueva dedicada a esos errores de especial importancia a los que hay de dar una solución de forma rápida, por lo que crearemos nuestra rama "Hotfix" directamente desde la rama "Master", para ello seguiremos los mismos pasos vistos anteriormente pero deberemos hacer clikc en la opcion "Create Branch From..." mediante esta opción podremos seleccionar directamente a partir de que rama crear una nueva.(git checkout master), para situarnos en la rama master, (git checkout -b Hotfix) para crear la nueva rama a partir de master.

- Tras una reunion de equipo decidimos implementar una funcionalidad nueva, para ello creamos una nueva rama "Features2" esta vez a partir de neustra rama Develop. (git checkout Develop), para situarnos en la rama Develop, (git checkout -b Features2) para crear la nueva rama a partir de master.

- Para crear la funcionalidad realizaremos un cambio en el archivo App.jsx, hacemos commit y push para guardar los cambios sobre esta rama. (git add)(git commit -m "Mensaje")(git push origin Feature2)

- Continuaremos haciendo un merge entre la rama actual Develop y la rama Hotfix, para ello nos situaremos en la rama Develop (para cambiar entre ramas suficiente con seleccionarla en la parte de abajo a la izquierda de nuestro VScode) desde alli en la opciones seleccionamos "Branch" y en ese desplegable seleccionamos "Merge Branch..." seleccionamos de la cual queremos hacer el merge. (git checkout Develop) (git merge Hotfix)

- Ahora realizaremos el siguiente cambio en nuestra rama Develop, sobre el archivo App.jsx, concretamente realizaremos el cambio sobre la misma sección que el cambio realizado en Features2, a continuación actualizamos la rama con nuestro commit y push. (git add)(git commit -m "Mensaje")(git push)

- A continuación realizaremos un merge a Develop desde la rama Features2, debido a lo anterior se producirán conflictos, y nos obligará a elegir la rama que nos queremos quedar en nuestro merge. (git checkout Develop) (git merge Features2) A continuación deberemso resolver los conflictos, para ello se editarán manualmente los archivos en conflicto, para después marcar los conflictos como resuletos y realizando un commit para confirmar los cambios (git add .) (git commit -m "Mensaje del commit")

- Seleleccionamos la rama Develop como los cambios válidos y completamos el merge.

- A continuación procederemos haciendo el merge en la rama master de la rama Hotfix, en este caso no deberia de haber conflictos y lo completaremos mediante el procediemiento visto anteriormente. (git checkout master) (git merge Hotfix)

- Vamos a crera una nueva rama llamada "Release", y lo haremos a partir de nuestra rama actual Develop, procederemos como habitualmente, seleccionaremos la opción "Branch", y dentro de esta la opción "Create Branch From..." y seleccionamos Develop como la rama a partir de la cual será creada, le damos nombre y la publicamos. (git checkout Develop) (git checkout -b Release)

- Realizaremos un cambio sobre esta rama, haremos commit y push para actualizarla. (git add)(git commit -m "Mensaje")(git push origin Release)

- Por último vamos a hacer un merge de esta rama sobre las ramas master y Develop. Procederemos como previamente hemos visto. (git checkout master) (git merge Release) y a continuación (git checkout Develop) (git merge Release)