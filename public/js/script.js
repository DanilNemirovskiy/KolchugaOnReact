var hideTheModal = $.cookie('hideTheModal');
// если cookie не установлено появится окно
if(hideTheModal == null){
    // задержка 7 секунд
    setTimeout(function(){
        // вызвать модальное окно
        $('button').onclick = function() {
            showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
                alert("Вы ввели: " + value);
                // если нажата кнопка "Закрыть"
                $('.close-modal').click(function(){
                    // добавить cookie
                    $.cookie('hideTheModal', { expires: 30, path: '/' });
                });
            }, 5000);
        }
    });
}




