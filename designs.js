// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
// Your code goes here!

    const table = $("#pixel_canvas");
    for(let i = 0; i < height; i ++){
        let content = "";
        content += "<tr>";
        let j = 0;
        while(j < width){
            content += "<td></td>";
            j ++;
        }
        content +="</tr>";
        table.append(content);
    }
}

$(document).ready(function() {

    $("#sizePicker").on("submit", function (){
        $("#pixel_canvas").empty();
        const height = $("#input_height").val();
        const width = $("#input_width").val();
        makeGrid(height, width);
        return false;
    });

    $("#pixel_canvas").on('click', 'td', function(){
        const color = $("#colorPicker").val();
        $(this).css("background-color",color);
    })
});