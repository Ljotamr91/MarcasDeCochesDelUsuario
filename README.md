# Plantilla_Front_2020
Plantilla para proyectos de FrontEnd = HMLT5 + CSS3 + SASS + JAVASCRIPT
1 clonamos el proyecto
    git clone URL

2 eliminamos la carpeta .git oculta y cambiamos nombre de la carpeta del proyecto a la deseada 
     rm -rf .git

3 inicializamos el proyecto con git
    git init

4 comprobamos el estado de los archivos 
    git status

5 añadimos todos los archivos al commit
    git add -A

6 volvemos a comprobar el estado a ver si pasan de rojos a verdes
    git status

7 hacemos un commit con comentario archivos
    git commit -m "comentario"

8 añadimos el remote origin
    git remote add origin URL

9 subimos los cambios realizados 
    git push origin master

X cada vez que queramos subir cambios miraremos el estado ,añadiremos los archivos que no esten en seguimiento, haremos commit y push 
    como pone en los pasos 5, 6, 7 y 9