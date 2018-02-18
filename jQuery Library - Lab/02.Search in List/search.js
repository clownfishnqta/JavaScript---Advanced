function search() {
    let counter = 0;
    let searchValue = $('#searchText').val();
    $('#towns').find('li').each((index, el) => {
        if (el.textContent.includes(searchValue)) {
            $(el).css('font-weight', 'bold');
            counter++;
        }
    })
    $('#result').text(counter + ' matches found.')
}
