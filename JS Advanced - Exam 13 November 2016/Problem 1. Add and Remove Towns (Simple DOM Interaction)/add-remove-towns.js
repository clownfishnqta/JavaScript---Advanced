function attachEvents() {
    let deleteBtn = $('#btnDelete').click(() => $('#towns').find(':selected').remove());

    let addBtn = $('#btnAdd').click(() => {
        let newItem = $('#newItem').val();
        let element = $(`<option>${newItem}</option>`);
        if (newItem.length !== 0) {
            $('#towns').append(element);
        }
        $('#newItem').val('');
    });

}
