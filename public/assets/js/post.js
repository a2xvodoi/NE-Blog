function deletePost() {
    var idpost;
    var formDelete = document.forms['form-delete'];
    $('#modelDelete').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        // Extract info from data-* attributes
        idpost = button.data('idpost');
        console.log(idpost);
    });
    $('.post-dl').click((e) => {
        e.preventDefault();
    })
    $('.btn-delete').click((e) =>{
        e.preventDefault();
        console.log('click');
        formDelete.action = `/admin/post/${idpost}/delete?_method=DELETE`;
        formDelete.submit();
    })
}

$(document).ready(function () {
    deletePost();
});