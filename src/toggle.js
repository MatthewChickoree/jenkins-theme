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

    // patch for multijob
    $("#projectstatus img.icon-red").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-blue").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-yellow").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-grey").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-red-anime").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-blue-anime").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-yellow-anime").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-grey-anime").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-disabled").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-nobuilt").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-disabled-anime").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-nobuilt-anime").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-aborted-anime").addClass("stock-jenkins-ball");
    $("#projectstatus img.icon-aborted").addClass("stock-jenkins-ball");

    $("#projectstatus img.icon-red").parent().addClass("td-icon-red td-sep");
    $("#projectstatus img.icon-blue").parent().addClass("td-icon-blue td-sep");
    $("#projectstatus img.icon-red-anime").parent().addClass("td-icon-red-anime td-sep");
    $("#projectstatus img.icon-grey-anime").parent().addClass("td-icon-grey-anime td-sep");
    $("#projectstatus img.icon-yellow-anime").parent().addClass("td-icon-yellow-anime td-sep");
    $("#projectstatus img.icon-grey").parent().addClass("td-icon-grey td-sep");
    $("#projectstatus img.icon-blue-anime").parent().addClass("td-icon-blue-anime td-sep");
    $("#projectstatus img.icon-yellow").parent().addClass("td-icon-yellow td-sep");
    $("#projectstatus img.icon-disabled").parent().addClass("td-icon-disabled td-sep");
    $("#projectstatus img.icon-nobuilt").parent().addClass("td-icon-nobuilt td-sep");
    $("#projectstatus img.icon-disabled-anime").parent().addClass("td-icon-disabled-anime td-sep");
    $("#projectstatus img.icon-nobuilt-anime").parent().addClass("td-icon-nobuilt-anime td-sep");
    $("#projectstatus img.icon-aborted-anime").parent().addClass("td-icon-aborted-anime td-sep");
    $("#projectstatus img.icon-aborted").parent().addClass("td-icon-aborted td-sep");
    // Patch for multijob - end

    $(".test-trend-caption").parent().addClass("test-trend-coverage");
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
