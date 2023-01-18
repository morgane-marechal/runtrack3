$(document).ready(() => {
    const $text = $('#text');
    $text.hide();

    $('#button').on('click', () => {
        $text.show();
      })

    const $html = $('#all-html');
    $html.show();

    $('#button2').on('click', () => {
        $html.hide();
      })
});