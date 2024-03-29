


$("#add_user").submit(function (event) {
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if (window.location.pathname == "/admin") {
    $ondelete = $("a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            "url": `/api/users/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}