/* global $ _ */
$(function () {
$.getJSON('data/product.json', function (data){ 
  // ALL YOUR CODE GOES BELOW HERE //
    var products = data;
    $('<section>').attr('id', 'all-products').append($('<h2>').text('All Products').addClass('heading')).appendTo('main');
    
    
    //listing of product photo and name
    _.map(products, function(product) {
        var img = $('<img class="dynamic">').css('height', '300px').css('width', '150px');
        var $productPhoto = img.attr('src', product.image).attr('id', 'product-photo');
        var $productName = $('<li>').addClass('name').text(product.desc).css('color', 'rgb(14, 62, 136)').css('font-weight', 'bold');
        var $productType = $('<li>').addClass('type').text(product.type).css('font-weight', 'light').css('color', 'black');
        $('#all-products').append($productPhoto, $productName);
    });
        
    
    
    
     
        
        
        
    
    
    // var popup = function(event) {
    //     products.map(function(product) {
    //         $.onclick(products.product.image, products.product.desc, products.product.price);
    //         event.preventDefault();
    //             $("#product-photo").modal({                   
    //                 width: 300,
    //                 modal: true,
    //                 close: function(event, ui) {
    //                     $("#dialog").remove();
    //                     }
    //                 });
    //     });
    //         };
    
    
    // $('#product-photo').click(function(event) {
    //     _.map(products, function(product) {
    //   var imgBig = $('<img class="dynamic">').css('height', '500px').css('width', '350px');
    //   var $productPhotoBig = imgBig.attr('src', products.product.image).attr('id', 'product-photo-lg');
    //   var $productName = $('<li>').addClass('name').text(data.product.desc).css('color', 'rgb(14, 62, 136)').css('font-weight', 'bold');
    //   var $productPrice = $('<li>').addClass('price').text('$' + products.product.price).css('font-style', 'italic').css('color', 'black');
    //   var $productDesc = $('<div>').addClass('desc').text(products.product.specs).css('font-weight', 'light').css('color', 'black');
    //   var openClick = $("#product-photo").modal({modal: true, height: 590, width: 1005 });
    //   openClick.append($productName, $productPhotoBig, $productPrice, $productDesc);
    //   ('hideOnContentClick', true);
//         });
// 	});
    
    

  // ALL YOUR CODE GOES ABOVE HERE //
});
});