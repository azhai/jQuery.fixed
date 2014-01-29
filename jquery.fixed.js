/*!
 * jQuery fixed
 * Ryan Liu
 * https://github.com/azhai/jQuery.fixed
 *
 * Thanks: http://www.2fz1.com/?p=520
 */

;(function($) {
    jQuery.fn.fixed = function(options) {
        var defaults = {width:200, height:300, x:0, y:0};
        var o = jQuery.extend(defaults, options);

        var isIe6 = !window.XMLHttpRequest;
        var html= $('html');
        if (isIe6 && html.css('backgroundAttachment') !== 'fixed') { //防止抖动
            html.css('backgroundAttachment','fixed')
            .css('backgroundImage','url(about:blank)');
        };

        return this.each(function() {
            var domThis=$(this)[0];
            var objThis=$(this);
            objThis.css('width' , o.width + 'px');
            objThis.css('height' , o.height + 'px');
            if(isIe6){
                objThis.css('position' , 'absolute');
                x = o.x < 0 ? document.documentElement.clientWidth + o.x - o.width : o.x;
                y = o.y < 0 ? document.documentElement.clientHeight + o.y - o.height : o.y;
                domThis.style.setExpression('left', 'eval((document.documentElement).scrollLeft + ' + x + ') + "px"');
                domThis.style.setExpression('top', 'eval((document.documentElement).scrollTop + ' + y + ') + "px"');
            } else {
                var horizon = o.x < 0 ? 'bottom' : 'top';
                var vertical = o.y < 0 ? 'right' : 'left';
                objThis.css('position' , 'fixed').css(horizon,Math.abs(o.y)).css(vertical,Math.abs(o.x));
            }
        });
    };
    jQuery.fn.transparent = function() {
        var isIe6 = !window.XMLHttpRequest;

        if (isIe6) {
            function trans_img(img)
            {
                var imgID = (img.id) ? "id='" + img.id + "' " : "";
                var imgClass = (img.className) ? "class='" + img.className + "' " : "";
                var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
                var imgStyle = "display:inline-block;" + img.style.cssText;
                if (img.align == "left") imgStyle = "float:left;" + imgStyle;
                if (img.align == "right") imgStyle = "float:right;" + imgStyle;
                if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
                var strNewHTML = "<span " + imgID + imgClass + imgTitle
                    + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
                    + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
                    + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
                img.outerHTML = strNewHTML;
            }
            return this.each(function() {
                var img=this;
                if (img.tagName == 'IMG') {
                    var src = img.src.toUpperCase();
                    var extname = src.substring(src.length-3, src.length);
                    if(extname == "PNG") {
                        trans_img(img);
                    }
                }
            });
        }
    };
})(jQuery);
