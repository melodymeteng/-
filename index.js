/**
 * Created by apple on 17/12/23.
 */
require(['Carousel'],function(Carousel){
    var carousel1=new Carousel();
    carousel1.init({
        selector:"#content1",
        imgDate:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        buttonType:"squire",
        btnPos:"bottom",
        speed:"2000"
    });
    var carousel2 = new Carousel();
    carousel2.init({
        selector:"#content2",
        imgDate:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        buttonType:"circle",
        btnPos:"center",
        speed:"1000"
    });

});