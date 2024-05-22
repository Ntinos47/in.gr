<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Toggle Div Content</title>
</head>
<body>

<div id="myDiv">Original Content</div>
<div id="newContent" style="display: none;">New Content</div>

<button onclick="toggleContent()">Toggle Content</button>

<script>
function toggleContent() {
    // Access the div elements by their ids
    var div = document.getElementById("myDiv");
    var newDiv = document.getElementById("newContent");

    // Check if myDiv currently displays original content
    if (div.innerHTML === "Original Content") {
        // Change the content of myDiv to newContent's content
        div.innerHTML = newDiv.innerHTML;
    } else {
        // Change the content of myDiv back to original content
        div.innerHTML = "Original Content";
    }
}
</script>

</body>
</html>
