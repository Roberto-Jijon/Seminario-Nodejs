function  hola ( nombre ,  fn_cb )  {
    setTimeout (  function ( )  {
        consola . log (  `Hola soy $ { nombre } .`  )
        fn_cb ( nombre )
    } ,  1000 )
}

function  hablar (  fn_cb  )  {
    setTimeout (  function  ( )  {
        consola . log (  'Bla bla bla bla ...'  )
        fn_cb ( )
    } ,  1000 )
}

function  adios (  nombre  )  {
    setTimeout (  function  ( )  {
        consola . log (  `¡Adiós $ { nombre } !`  )
        consola . log ( 'Finalizando conversación.' )
    } ,  1000 )
}

function  dialogar (  nombre ,  numVeces  )  {
    if  ( numVeces  >  0 )  {
        hablar (  function (  )  {
            dialogar (  nombre ,  - numVeces  )
        }  )            
    }  más  {
        adios (  nombre  )
    }
}

consola . log (  'Inicializando conversación ...'  )
hola ( 'Guillermo' ,  función ( nombre )  {
    dialogar (  nombre ,  4  )
}  )