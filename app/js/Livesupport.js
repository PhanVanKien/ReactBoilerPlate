 jQuery(document).ready(function () {       
        jQuery('#btnHotro').click(function () {            
            jQuery(this).animate({ right: "-60px" }, 500);
            jQuery('#ctSp').delay(500).animate({ right: "0" }, 500);
        });

        jQuery('#bgThugon').click(function () {
            jQuery('#ctSp').animate({ right: "-210px" }, 500);
            jQuery('#btnHotro').delay(500).animate({ right: "0px" }, 500);
        });
    });// JavaScript Document