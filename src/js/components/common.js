export function copy_to_clipboard(text) {
    let $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val(text).select();
    document.execCommand("copy");
    $tmp.remove();
}