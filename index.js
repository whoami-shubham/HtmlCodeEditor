/*
*  here event listener is listening for keyup event and on keyup event call display function.
*  and display function is fetching  contents of all three sections and save that content into html,css and js variable
*  after that create a <iframe> object assign it to output variable and replace content of iframe. 
*/
document.getElementById('code').addEventListener("keyup", display)
function display(){
    var html =   document.getElementById('html')
    var css  =   document.getElementById('css')
    var js   =   document.getElementById('js')
    var output = document.getElementById('output').contentWindow.document
    output.open()
    output.writeln(
        html.value + "<style>" + 
        css.value + "</style>" +
        "<script>" + js.value + "</script>"
    )
    output.close()
}
