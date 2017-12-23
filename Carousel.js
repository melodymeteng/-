/**
 * Created by apple on 17/12/23.
 */
define(['jquery'],function($){
    function Carousel(){

        this.$container = $('<div class="carousel-container"></div>');
        this.$imgBox = $('<div class="carousel-img-box"></div>');
        this.$tab = $('<ul class="carousel-tab"></ul>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');
        this.defaultOption={
            buttonType:"circle",
            btnPos:"center",
            speed:"1000"
        }
    }
    Carousel.prototype.init=function (option) {
        $.extend(this.defaultOption,option);
        var _this=this;
        this.$container.append(this.$imgBox).append( this.$tab).append(this.$prev).append(this.$next );
        for(var i=0;i<this.defaultOption.imgDate.length;i++) {
            console.log('a');
                var cls = (i == 0) ? "selected" : "";
            this.$imgBox.append($('<img class="' + cls + '" src="' + this.defaultOption.imgDate[i] + '"/>'));
            this.$tab.append($('<li class="' + this.defaultOption.buttonType + cls + '">' + (i + 1) + '</li>'));
        }

       this.$prev.addClass("carousel-prev-"+this.defaultOption.btnPos);
        this.$next.addClass("carousel-next-"+this.defaultOption.btnPos);
        $(this.defaultOption.selector).append(this.$container);
        $('li',this.$tab).on('click',function () {
            changeImg($(this).index());
            iNow=$(this).index();
        });
        function changeImg(idx) {
            $('li',this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
            $('img',this.$imgBox).eq(idx).addClass('selected').siblings().removeClass('selected');
        }
        this.$prev.on('click',function () {
            iNow--;
            if(iNow==-1){
                iNow=_this.defaultOption.imgDate.length-1;
            }
            changeImg(iNow);
        });
        this.$next.on('click',function () {
            iNow++;
            if(iNow==-1){
                iNow=_this.defaultOption.imgDate.length-1;
            }
            changeImg(iNow);
        });



        $(this.defaultOption.selector).append(this.$container);



    }





    return Carousel;

});