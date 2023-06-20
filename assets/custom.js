/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line


  document.addEventListener(
    'theme:cart:change',
    function (event) {
      //gift functionnaly
      if(window.location.pathname=='/cart'){
        if(!document.querySelector('[data-gift-item]')){
          const elements = document.querySelectorAll('.add-btn-text')
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('disabled');
            elements[i].classList.remove('isTheCurrentProduct');
            elements[i].innerHTML='Add to cart';
          }
          if(document.querySelector('.btn-wrap')){
            document.querySelector('.btn-wrap').innerHTML="";
          }
        }
  
        //if only item in the cart is gift item i should clear the cart
        if(event.detail.cartCount==1 && document.querySelector('[data-gift-item]')){
          $.ajax({
            type: 'POST',
            url: '/cart/clear.js',
            dataType: 'json',
            success: function(cart){location.reload();},
            error: function(err){location.reload();}
          });
        }
      }
      //delete gift from cart when the press is less than item
      if(window.cart.subtotal<=5000){
        document
        .querySelector("[data-gift-item]")
        ?.querySelector(".cart__item__remove")
        .click();
      }
      console.log(event)
  })
  




  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();
