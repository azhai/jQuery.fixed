jQuery.fixed
============

Support position:fixed and png:transparent in IE6

Usage:
.fixed({width:200, height:300, x:-10, y:-20});
x: 
  x >= 0     float left
  x < 0      float right
y:
  same as x

.transparent();

```
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript">
    $(".floatDiv").fixed({width:200, height:300, x:-10, y:-20}).find("img").transparent();
    </script>

    <div class="floatDiv"><img src="picture.png" /></div>
```
