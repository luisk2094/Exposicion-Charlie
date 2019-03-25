
//DOM listo
$(function() {
    cm.init();
});

var cm = {

    _province   : null,
    _canton     : null,
    _district   : null,

    init: function(){

        //obtener provincias
        cm.getPronvinces();

        //activar los listeners
        cm.listener();
    },

    //activar listeners
    listener: function(){

        //filtros
        $("#search-province, #search-canton, #search-district").on("keyup", function(e) {
            e.preventDefault();

            cm.filter({
                value   : $(this).val(),
                selector: $(this).data("class"),
                data    : "name"
            });
        });

        //click sobre una provincia
        $("#list-province").on("click", ".province", function(){
            
            cm._province = $(this).data("key");

            cm.getCanton(cm._province, function(){
                $("#list-district").html("");
            });
        });

        //click sobre un cantón
        $("#list-canton").on("click", ".canton", function(){
            cm._canton = $(this).data("key");
            cm.getDistrict(cm._province, cm._canton);
        });
    },

    //obtener provincias
    getPronvinces: function(){
        
        cm.request("GET", "https://ubicaciones.paginasweb.cr/provincias.json", {},
        
        function(response){

            cm.createList({
                values: response,
                common: "province"
            }, function(list){
                
                $("#list-province").html(list);
            });
        });
    },

    //obtener cantones
    getCanton: function(province, callback){

        cm.request("GET", `https://ubicaciones.paginasweb.cr/provincia/${province}/cantones.json`, {},
        
        function(response){

            cm.createList({
                values: response,
                common: "canton"
            }, function(list){
                
                $("#list-canton").html(list);
                callback ? callback() : "";
            });
        });
    },

    //obtener distritos
    getDistrict: function(province, canton){

        cm.request("GET", ` https://ubicaciones.paginasweb.cr/provincia/${province}/canton/${canton}/distritos.json`, {},
        
        function(response){

            cm.createList({
                values: response,
                common: "district"
            }, function(list){
                
                $("#list-district").html(list);
            });
        });
    },

    //crear lista
    createList: function(data, callback){

        var obj     = data.values;
        var common  = data.common;
        var html    = "";

        for(key in obj) {
            html += `<li data-key='${key}' data-name='${obj[key]}' class='list-group-item ${common}'>${obj[key]}</li>`;
        }

        callback(html);
    },

    //consulta mediante ajax
    request: function(type, url, data, callback, error){
        
        $.ajax({
            dataType            : "json",
            contentType         : "application/json",
            method              : type,
            url                 : url,
            data                : data,
            // success: function(response, status) {
            //     callback();
            // },
            // error: function(xhr, status, err) {
            //     error();
            // }
        // });

        }).done(function(response){

            //callback success
            callback(response);

        }).fail(function(){

            //callback error message
            error();
        });
    },

    //filtrar lista
    filter: function(data) {
        
        var regex = new RegExp('\\b\\w*' + data.value + '\\w*\\b', 'i');
        $(data.selector).hide().filter(function() {
            return regex.test($(this).data(data.data));
        }).show();
    },
}