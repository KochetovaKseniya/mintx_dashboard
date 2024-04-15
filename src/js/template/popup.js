export default function () {
    var interval;

    $('.popup-trigger').on('click', function() {
        var targetPopupId = $(this).data('target');
        var $targetPopup = $('#' + targetPopupId);
        
        if( $('.popup').hasClass('active')) {
            let popup = $(this).closest('.popup');
            popup.css('opacity', '0');
            setTimeout(function() {
                popup.removeClass('active');
            }, 500); 

            setTimeout(function() {
                if (!$targetPopup.hasClass('active')) {
                    $targetPopup.addClass('active');
                    $targetPopup.css('opacity', '1');
                }
            }, 200);
        } else {
            if (!$targetPopup.hasClass('active')) {
                $targetPopup.addClass('active');
                $targetPopup.css('opacity', '1');
            }
        }
        
        // Function Call Countdown for resend Email - Verification popup
        clearInterval(interval);
        if(targetPopupId == "verification-step3") {
            interval = setInterval(updateCountdown, 1000);
        }

    });
    

    $('.popup__close').on('click', function(event) {
        let popup = $(this).closest('.popup');
        if (popup.length && popup.hasClass('active')) {
            popup.css('opacity', '0');
            setTimeout(function() {
                popup.removeClass('active');
            }, 500); 
        }
    });


    // Countdown for resend Email code - - Verification popup
    function updateCountdown() {
        var countdownElement = $('#verification-step3 .verification__policy span');
        var currentTime = countdownElement.text().split(':');
        var minutes = parseInt(currentTime[0]);
        var seconds = parseInt(currentTime[1]);
        
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                clearInterval(interval);
                return;
            }
        }
        countdownElement.text(minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
    }
    // Countdown for resend Email code
    
}