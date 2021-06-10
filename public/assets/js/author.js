function deletePost() {
    var idAuthor;
    var formDelete = document.forms['form-delete'];
    $('#modelDeleteAuthor').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        // Extract info from data-* attributes
        idAuthor = button.data('idauthor');
    });
    $('.post-dl').click((e) => {
        e.preventDefault();
    })
    $('.btn-delete').click((e) =>{
        e.preventDefault();
        formDelete.action = `/admin/author/${idAuthor}/delete?_method=DELETE`;
        formDelete.submit();
    })
}

$(document).ready(function () {
    deletePost();
});