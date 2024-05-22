<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Change Div Content</title>
</head>
<body>

<div id="myDiv">Original Content</div>
<div id="newContent" style="display: none;">New Content</div> <!-- Hide newContent div -->

<button onclick="changeContent()">Change Content</button>

<script>
function changeContent() {
    // Access the div elements by their ids
    var div = document.getElementById("myDiv");
    var newDiv = document.getElementById("newContent");
    
    // Change the content of myDiv to the content of newContent
    div.innerHTML = newDiv.innerHTML;
}
</script>

</body>
</html>
