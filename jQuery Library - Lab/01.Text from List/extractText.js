function extractText() {
    let items = $('#items').find('li').toArray()
        .map((li) => $(li).text()).join(', ');

    $('#result').text(items);
}
