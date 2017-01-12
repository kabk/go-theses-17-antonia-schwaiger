

$('p').html(function (i, html) {
    var outputHTML = "";
    var insideTag = false;
    var chars = $.trim(html).split("");
    for (var i=0; i < chars.length; i++) {
        // we check each character and process it


        // check if we are entering an html tag
        if (chars[i] === "<") {
            insideTag = true;
        }

        // replace spaces with non breaking spaces that will show in layout
        if (!insideTag && chars[i] === " ") {
            chars[i] = '&nbsp;';
        }


        // add character to output,
        // we dont want to add the extra spans within an html tag
        if (insideTag) {
            outputHTML += chars[i];
        } else {
            outputHTML += '<span>' + chars[i] + '</span>';
        }

        // check if we are leaving an html tag
        if (chars[i] === ">") {
            insideTag = false;
        }


    }
    return outputHTML;
});

/*$('p').html(function (i, html) {
    var chars = $.trim(html).split("\n");
    return '<span>' + chars.join('\n</span><span>') + '</span>'; */
});



$( "span" ).mouseenter(function(e) {
var element = e.target;
  console.log(element);
  if (element && element.tagName.toLowerCase() !== 'html') {
    if (!element.style.transform) {
      element.style.transform = 'scale(1.0)';
    };
    // if it has a transformation applied, and it is a scale transformation
    // find out what scale it is now
    currentScale = element.style.transform.match(/scale\(([0-9.]+)\)/)[1];
    console.log(currentScale);
    // the new scale is 0.1 more
    newScale = parseFloat(currentScale) + 0.1;
    // set the new scale
    element.style.transform = 'scale(' + newScale + ')';
  }
});




 