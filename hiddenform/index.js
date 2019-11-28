window.onload = function() {
    function addValue(passField, value) {
        passField.value = value;
    }

    var passField0 = document.getElementById('id1');
    passField0.value = 'Enter your credentials';
    var passField1 = document.getElementById('id2');

    addValue(passField1, 'Enter your email');
    passField1.addEventListener('focus', function() {
        addValue(passField1, '');
    });
    passField1.addEventListener('blur', function() {
        addValue(passField1, 'Enter your email');
    });
};
