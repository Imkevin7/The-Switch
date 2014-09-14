function theSwitch() {
    var cir = $(this).css('margin-right');
    var thisn = $(this);
    var on = '-120px';
    var off = '-76px';
    switch (cir) {
        case on:
            thisn.css('marginRight', off);
            thisn.parent().addClass('white').removeClass('blue');
            break;
        case off:
            thisn.css('marginRight', on);
            thisn.parent().addClass('blue').removeClass('white');
            break;
    }

}

