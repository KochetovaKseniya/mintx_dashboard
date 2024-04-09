export function _AJAX(data, callback, method = 'POST', dataType = 'json') {
    let m = (String(method).toUpperCase() === 'POST' || String(method).toUpperCase() === 'GET') ? String(method).toUpperCase() : 'POST';

    jQuery.ajax({
        url: '/wp-admin/admin-ajax.php',
        method: m,
        dataType,
        data,
        success: callback,
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect. Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found (404).');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error (500).');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error. ' + jqXHR.responseText);
            }
            console.log(data);
        }
    });
}