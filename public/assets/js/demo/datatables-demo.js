// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "All"]]
  });
});
