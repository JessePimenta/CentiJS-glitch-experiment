

(function(){
window.onload = function(){
   var ct;
   var canvas = document.getElementById('c');
   ct = new Centi('ct');
   ct.init(canvas, null);
   ct.setupFunc = init;
   ct.drawFunc = draw;
   ct.start();

   requestAnimationFrame(update);

   function init(){
      ct.sz(1,1);
      ct.bg(0);
      ct.strk(100);

   }
   function draw(){
      ct.crash(ct.rnd(1,1));
      ct.col(ct.rnd(3,9));
      ct.oval(ct.cx,ct.cy,ct.h/2,ct.rnd(3,9));

   }

   function update(){
       requestAnimationFrame(update);
       ct.update();
   }

   if ( window.addEventListener ) {
       window.addEventListener('resize', onResize, false);
   } else if ( window.onresize ) {
       window.onresize = onResize;
   }

   function onResize(){
       ct.size(ct.sizeW, ct.sizeH);
   }
};
})();