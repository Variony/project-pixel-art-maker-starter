function makeGrid(height, width) {

    const table = document.getElementById('pixel_canvas');
    for (let i = 0; i < height; i++) {
        // Inserts 10 rows into the table
        const row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            // Inserts 10 cells into each of the rows
            row.insertCell(j);
        }
    }
}

$(document).ready(function() {

    $("#sizePicker").on("submit", function (e){
        e.preventDefault();
        $("#pixel_canvas").empty();
        const height = $("#input_height").val();
        const width = $("#input_width").val();
        makeGrid(height, width);
    });

    $("#pixel_canvas").on('click', 'td', function(){
        const color = $("#colorPicker").val();
        $(this).css("background-color",color);
    })
});