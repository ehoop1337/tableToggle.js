/**
* tableToggle.js
* Function that hides / expands an html table
* @author   Ruslan Sayfutdinov          https://github.com/ehoop1337/tableToggle.js
* @param    {String}    selector        To which DOM element do we apply the function
* @param    {Integer}   visibleElements Number of visible elements <tr>
* @param    {String}    textInButton    Text in the button that appears
* @return   {boolean}                   Returns true if there were no errors in the function
*/

function tableToggle(selector, visibleElements = 0, textInButton = "Show more") {
    const selectorAll = document.querySelectorAll(selector);
    const lengthSelectorAll = selectorAll.length;

    let error = false;

    if (lengthSelectorAll > 1) {
        for (let i = 0; i < lengthSelectorAll; i++) {
            engine(selectorAll[i]);
        }
    } else {
        engine(document.querySelector(selector));
    }

    function engine(sel) {
        const table = sel,
            thead = table.querySelector("thead"),
            tbody = table.querySelector("tbody"),
            tr = table.querySelectorAll("tr"),
            trCount = tr.length,
            newTr = document.createElement("tr"),
            newTd = document.createElement("td"),
            newButton = document.createElement("button");
        let play = false,
            colspan = 1;

        oneStep(twoStep);

        function oneStep(callback) {
            if (thead != null) {
                let trInThead = thead.querySelectorAll("tr");
                for (let i = 0; i < trInThead.length; i++) {
                    let countThTrInThead = getColLength(
                        trInThead[i].querySelectorAll("th")
                    );
                    if (countThTrInThead > colspan) {
                        colspan = countThTrInThead;
                    }
                }
            }
            if (tbody != null) {
                let trInTbody = tbody.querySelectorAll("tr");
                for (let i = 0; i < trInTbody.length; i++) {
                    let countTdtrInTbody = getColLength(
                        trInTbody[i].querySelectorAll("td")
                    );
                    if (countTdtrInTbody > colspan) {
                        colspan = countTdtrInTbody;
                    }
                }
            }
            function getColLength(elems) {
                let cols = 0;
                for (let i = 0; i < elems.length; i++) {
                    let col = elems[i].getAttribute("colspan");
                    cols = col != null ? cols + parseInt(col) : cols + 1;
                }
                return cols;
            }
            newButton.innerHTML = textInButton;
            newButton.style.cursor = "pointer";
            newTd.appendChild(newButton)
            newTd.setAttribute("align", "center")
            newTd.setAttribute("valign", "baseline")
            newTd.setAttribute("colspan", colspan);
            newTr.appendChild(newTd);
            newTr.classList.add("toogleTable");
            callback();
        }

        function twoStep() {
            for (let i = 0; i < trCount; i++) {
                if (i >= visibleElements) {
                    tr[i].style.display = "none";
                    if (play == false) { play = true; }
                }
            }
            if (play == true) {
                if (tbody != null) {
                    tbody.appendChild(newTr);
                } else if (thead != null) {
                    thead.appendChild(newTr);
                } else {
                    console.group("Script execution error tableToggle");
                    console.error("Error in the table: there is no mandatory thead or tbody tag:");
                    console.error(table);
                    console.groupEnd();
                    error = true;
                }
                newButton.addEventListener("click", function () {
                    let tableForButton = this.closest("table"),
                        trInTableForButton = tableForButton.querySelectorAll("tr"),
                        countTrInTableForButton = trInTableForButton.length;
                    this.parentNode.parentNode.remove();
                    for (let i = 0; i < countTrInTableForButton; i++) {
                        trInTableForButton[i].removeAttribute("style");
                    }
                });
            } else {
                console.group("Script execution error tableToggle");
                console.error("The selected item is not a table:");
                console.error(table);
                console.groupEnd();
                error = true;
            }
        }
    }
    return error ? false : true;
}