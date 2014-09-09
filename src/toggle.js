/**
 * Canon for Jenkins Javascript Overrides
 *
 * Leverages Jenkins-included Prototype.js
 *
 * @author Rackspace Web Team
 */
document.observe("dom:loaded", function () {
    // Auto Refresh
    var autoRefreshSelector = $$('#right-top-nav #right-top-nav div.smallfont');
    if (autoRefreshSelector.length > 0) {
        var autoRefreshLink = new Element('span').update(autoRefreshSelector[0].innerHTML);
        $$('span.jenkins_ver')[0].insert({before:autoRefreshLink});
    }
    // Click logo, go home.
    $$('div.logo')[0].on('click', function(){ location = '/'; });
});

jQuery(function($){
    var toggle = '<div class="toggle"></div><input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox"><label for="cmn-toggle-7" data-on="Hide" data-off="Show"></label>';
    $('#description-link').text('Edit');
    $('#description').before(toggle);

    if(readCookie('toggle') != 'checked') {
        $('#description').hide();
    } else {
        checkToggle($('.cmn-toggle'));
        $('#description').show();
    }

    $('.cmn-toggle').change(function() {
        $('#description').slideToggle('fast');
        if($('.cmn-toggle').is(':checked')) {
            writeCookie('toggle', 'checked', 30);
        } else {
            writeCookie('toggle', 'unchecked', 30);
        }
    });
});

function checkToggle(toggle) {
     toggle.prop('checked', true);
}

function writeCookie(name,value,days) {
    var date, expires;
        if (days) {
            date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}