# tableToggle.js
Hides the lines in the table by adding a button to reveal them

> Works without connecting jQuery

> Unminified file size - 175 B

> Minified file size - 169 B

## Function parameters
* @param    {String}    selector        To which DOM element do we apply the function
* @param    {Integer}   visibleElements Number of visible elements <tr>
* @param    {String}    textInButton    Text in the button that appears
* @return   {boolean}                   Returns true if there were no errors in the function

## Example
```html
  <table id="table">
    <thead>
      <tr>
        <th>example</th>
        <th>example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>example</td>
        <td>example</td>
      </tr>
    </tbody>
  </table>

  <script src="tableToggle.min.js"></script>
  <script>
    tableToggle("#table", 1, "Open");
  </script>
```
  
## Example jsFiddle
[https://jsfiddle.net/ehoop1337/jgLfe5v3/](https://jsfiddle.net/ehoop1337/jgLfe5v3/)
