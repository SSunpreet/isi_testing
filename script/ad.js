$(document).ready(function () {

    // Ad has started.
    assignClickHandlers();

    var agent = navigator.userAgent;
    var checkagent1 = agent.includes("Brightsign");
    var checkagent2 = agent.includes("MW22");
    var checkagent3 = agent.includes("MW15");

    //*** Opens an external URL
    function openExternalLinkFull(e, clickTag) {
        // console.log('link')
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestFullscreenBrowserView(clickTag);
        } else {
            window.open(clickTag);
        }
    }
    //external pdf
    function openExternalPDF(e, pdfUrl) {
        // console.log('pdf')
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestPDFView(pdfUrl);
            event.stopPropagation();
        } else {
            window.open(pdfUrl);
        }
    }

    function assignClickHandlers() {
        //external links

        $('#one')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "https://www.opdualag.com/");
        }, false);

        $('.privacy-policy')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "https://www.bms.com/privacy-policy.html");
        }, false);

        $('.legal-notice')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "https://www.bms.com/legal-notice.html");
        }, false);

        $('.pi-isi')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://packageinserts.bms.com/pi/pi_opdualag.pdf");
        }, false);

        $('#pi-footer')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://packageinserts.bms.com/pi/pi_opdualag.pdf");
        }, false);

        $('.mg-isi')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://packageinserts.bms.com/medguide/medguide_opdualag.pdf");
        }, false);

        $('#mg-footer')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://packageinserts.bms.com/medguide/medguide_opdualag.pdf");
        }, false);


    }
  

});


// $(document).ready(function() {
//     console.log('PURPLE')

//     var detectMobile = window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
//     var isDevice = false;
//     if (detectMobile) {
//         isDevice = true;
//     }
//     var HOST = 'http://127.0.0.1:8081/';
//     function localPathURL(relativePath) {
//         var dirs = document.location.pathname.split('/');
//         console.log('dirs: ' + dirs);
//         var root = dirs[dirs.length - 2];
//         console.log('root: ' + root);
//         return HOST+root + '/' + relativePath;
//     }
//     var clickTag5 = 'https://www.opdivo.com/bladder-urinary-tract-cancer-adjuvant-treatment';
//     var clickTag6 = 'https://www.bms.com/legal-notice.html';
//     var clickTag7 = 'https://www.bms.com/privacy-policy.html';
//     var clickTag8 = 'https://sponsors.outcomehealthtech.com/packageinserts.bms/pi/pi_opdivo.pdf';
//     var clickTag9 = 'https://sponsors.outcomehealthtech.com/packageinserts.bms/medguide/medguide_opdivo.pdf';

//     $("#one").bind("click", function() {
//         // Enabler.exit(clickTag5);
//         if (isDevice) {
//             WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('" + clickTag5 + "', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
//             console.log("Android - Bg Exit");
//         } else {
//             window.open(clickTag5);
//             console.log(clickTag5);
//         }
//     });
//     $(".legal-notice").bind("click", function() {
//         // Enabler.exit(clickTag5);
//         if (isDevice) {
//             WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('" + clickTag6 + "', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
//             console.log("Android - Bg Exit");
//         } else {
//             window.open(clickTag6);
//             console.log(clickTag6);
//         }
//     });
//     $(".privacy-policy").bind("click", function() {
//         // Enabler.exit(clickTag5);
//         if (isDevice) {
//             WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('" + clickTag7 + "', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
//             console.log("Android - Bg Exit");
//         } else {
//             window.open(clickTag7);
//             console.log(clickTag7);
//         }
//     });
//     $(".pi-isi").bind("click", function() {
//         // Enabler.exit(clickTag5);
//         if (isDevice) {
//             WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('" + clickTag8 + "', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
//             console.log("Android - Bg Exit");
//         } else {
//             window.open(clickTag8);
//             console.log(clickTag8);
//         }
//     });
//     $("#pi-footer").bind("click", function() {
//         // Enabler.exit(clickTag5);
//         if (isDevice) {
//             WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('" + clickTag8 + "', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
//             console.log("Android - Bg Exit");
//         } else {
//             window.open(clickTag8);
//             console.log(clickTag8);
//         }
//     });

//     $(".mg-isi").bind("click", function() {
//         // Enabler.exit(clickTag5);
//         if (isDevice) {
//             WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('" + clickTag9 + "', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
//             console.log("Android - Bg Exit");
//         } else {
//             window.open(clickTag9);
//             console.log(clickTag9);
//         }
//     });
//     $("#mg-footer").bind("click", function() {
//         // Enabler.exit(clickTag5);
//         if (isDevice) {
//             WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('" + clickTag9 + "', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
//             console.log("Android - Bg Exit");
//         } else {
//             window.open(clickTag9);
//             console.log(clickTag9);
//         }
//     });
// }) 