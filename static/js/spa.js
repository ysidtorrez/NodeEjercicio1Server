
$(window).on('hashchange', function(){
    var url = window.location.hash,
    rutaArchivo=url.substring(2,url.length);
    $('.articulo').load(rutaArchivo + '.html');
   // console.log(url);
  //  alert(url);
})
$(window).load(function(){
        $(window).trigger('hashchange');
})
    function cargarPaginaEnContenedor(nombrePagina){
       $('.articulo').load(nombrePagina)
    }

    cargarPaginaEnContenedor('inicio.html');
