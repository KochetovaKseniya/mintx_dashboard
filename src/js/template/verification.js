export default function () {

    $('[href="#verification-start"]').on('click', function() {
        
        $('.finance__tabs--item').removeClass('active');
        let tab = $(this).attr('data-tab');
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        $('.finance__tabs--content').removeClass('active');
        $('.finance__tabs--content[data-content="' + tab + '"]').addClass('active');

    });

    //Validation - Email Code 
    $('#verification-step3 .verification__input').on('input', function() {
        var inputValue = $(this).val();
        if (inputValue.length > 3) {
            $('#verification-step3 .next').prop('disabled', false);
        } else {
            $('#verification-step3 .next').prop('disabled', true);
        }
    });

    //File Uoloading 
    
    $('input[type="file"]').on('change', function(e) {
        const files = e.target.files;
        if (files.length > 0) {
            $('.verification__person--media ').addClass('uploading');
            if (files.length == 1) {
                setTimeout(function() {
                    $('.verification__person--media ').removeClass('error');
                    $('.verification__person--media ').removeClass('uploading');
                    $('.verification__person--media ').addClass('uploaded');
                }, 500);
            }
            if (files.length > 1) {
                $('.verification__person--media ').removeClass('uploading');
                $('.verification__person--media ').removeClass('uploaded');
                $('.verification__person--media ').addClass('error');
            }
            for (let i = 0; i < files.length; i++) {
              $('.verification__person--media .result p').text(files[i].name);

              if (!isValidFileType(files[i])) {
                $('.verification__person--media ').addClass('error');
              }
            }
        }
    });
    function isValidFileType(file) {
        const validTypes = ['image/jpeg', 'image/png'];
        return validTypes.includes(file.type);
    }

}