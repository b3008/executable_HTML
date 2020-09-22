import SVG from '../svg/svg.js';




class Row {



    // let strokeDashArray;
    // var type;
    // myNode;
    // group;

    // _x; _y;


    x(v) {
        if (typeof v !== 'undefined') {
            this._x = v;
            this.group.x(v);
        } else {
            return this._x;
        }
    }

    y(v) {
        if (typeof v !== 'undefined') {
            this._y = v;
            this.group.y(v);
        } else {
            return this._y;
        }
    }

    getItemStartPoints(item) {
        if (item instanceof Row) {
            return item.getStartPoints();
        } else {
            return [[item.x(), item.y() + item.height() / 2]];
        }
    }


    getItemEndPoints(item) {

        if (item instanceof Row) {
            return item.getEndPoints();
        } else {
            return [[item.x() + item.width(), item.y() + item.height() / 2]];
        }
    }

    getStartPoints() {

        switch (this.type) {
            case 'serial':
                if (this.c.length) {
                    let firstItem = this.c[0];
                    return this.getItemStartPoints(firstItem);
                } else {
                    return [];
                }


            case 'parallel': {

                let points = [];
                for (let i = 0; i < this.c.length; i++) {
                    points = points.concat(this.getItemStartPoints(this.c[i]));
                }
                return points;
            }

        }
    }

    getEndPoints() {
        switch (this.type) {
            case 'serial':
                if (this.c.length) {
                    let lastItem = this.c[this.c.length - 1];
                    return this.getItemEndPoints(lastItem);
                } else {
                    return [];
                }


            case 'parallel': {
                let points = [];
                for (let i = 0; i < this.c.length; i++) {
                    points = points.concat(this.getItemEndPoints(this.c[i]));
                }
                return points;

            }

        }
    }






    width(v) {


        if (typeof v === 'undefined') {

            return this.group.width();
        }


    }


    height(v) {
        if (typeof v === 'undefined') {
            return this.group.height();

        }

    }


    addTo(svgjs) {
        this.group.addTo(svgjs);
        return this;
    }




    constructor(type, node) {
        this.gap = 30;
        this.c = [];

        this.type = type;
        this.myNode = node;
        this.group = SVG().group();
    }

    push(item) {

        switch (this.type) {

            case 'serial':
                if (this.c.length) {
                    item.x(this.c[this.c.length - 1].x() + this.c[this.c.length - 1].width() + this.gap)
                } else {
                    item.x(10);
                }
                item.y(10);
                this.c.push(item);



                //now ensure everything is centered on the x axis
                let yCenter = 0
                for (let i = 0; i < this.c.length; i++) {
                    yCenter = Math.max(yCenter, this.c[i].height() / 2)
                }
                for (let i = 0; i < this.c.length; i++) {
                    this.c[i].y(yCenter - this.c[i].height() / 2)
                }


                break;
            case 'parallel':
                if (this.c.length) {

                    let y = this.c[this.c.length - 1].y() + this.c[this.c.length - 1].height() + this.gap
                    item.y(y);
                } else {
                    item.y(10);
                }
                item.x(10);
                this.c.push(item);
                break;
        }
        if (item instanceof Row) {
            item.group.addTo(this.group)
        } else {
            item.addTo(this.group);
        }

    }



    makeLines(endPoints, startPoints) {

        let lines = SVG().group();
        for (let i = 0; i < endPoints.length; i++) {
            for (let j = 0; j < startPoints.length; j++) {
                let p1 = endPoints[i];
                let p2 = startPoints[j];
                let offset = - 1;


                let path = mySVG.bezier(p1[0], p1[1], p2[0], p2[1], offset);
                if (this.strokeDashArray) path.attr({ 'stroke-dasharray': this.strokeDashArray, });
                if ((this.type == 'serial') && !(this.strokeDashArray)) path.attr({ 'marker-end': 'url(#arrow)' });
                // path.addTo(draw);
                path.addTo(lines);

            }
        }
        return lines;
    }

    renderLines() {


        let lines = SVG().group();

        for (let i = 0; i < this.c.length - 1; i++) {

            if (this.c[i] instanceof Row) {
                let l = this.c[i].renderLines();
                l.addTo(lines);
            }
            if (this.type === 'serial') {
                let endPoints = this.getItemEndPoints(this.c[i]);
                let startPoints = this.getItemStartPoints(this.c[i + 1]);

                let l = this.makeLines(endPoints, startPoints);
                l.addTo(lines);

            }
        }
        if (this.c[this.c.length - 1] instanceof Row) {
            let l = this.c[this.c.length - 1].renderLines();
            l.addTo(lines);
        }


        return lines;

    }


    breakLine() {
        switch (this.type) {
            case 'serial':

                for (let i = 0; i < c.length - 1; i++) {
                    w += c[i].width() + this.gap;
                }
                w += c[c.length - 1].width();
                return w;

            case 'parallel':

            //find the longest member amd break it, then break others progressively
        }
    }



}

class mySVG {




    model(node) {

        if (!node) return;


        if (Object.keys(this.modellingFunctions).indexOf(node.nodeName) === -1) {
            return;
        }
        if (this.elementsFound.indexOf(node.nodeName) == -1) {
            this.elementsFound.push(node.nodeName);
        }
        return this.modellingFunctions[node.nodeName](node);
    }

    constructor() {

        this.elementsFound = [];


    }
    render(node) {
        if (!node) return;

        let draw = SVG();
        let defs = SVG(
            `<defs>
            <marker id="arrow" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,4 L5,2 z" fill="#000" />
            </marker>
          </defs>`
        );
        defs.addTo(draw);


        let item = this.model(node);
        console.log(this.elementsFound);

        item.group.addTo(draw);


        let lines = item.renderLines();
        lines.addTo(item.group);

        draw.node.dataset.source = encodeURIComponent(node.outerHTML.replace(/\n/g, ' ').replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim());
        // mySVG.svg = draw.node;


        draw.size(item.group.width() + 100, item.group.height() + 100);
        this.svg = draw.node;
        return draw.node;

    }

    renderKey() {

        let group = SVG().group();
        for (let i = 0; i < this.elementsFound.length; i++) {

            let example = this.examples[this.elementsFound[i]];
            if (!example) {
                continue;
            }

            let el = document.createElement('div');
            debugger;
            el.innerHTML = example.html;

            let m = this.model(el);


            // console.log(m);
            m.addTo(group);
            m.y(group.height() + 25);
            if (m.renderLines) {

                let lines = m.renderLines();
                lines.addTo(m.group);
            }

        }
        let svg = SVG().size(group.width() + 50, group.height() + 50);
        group.x(10);
        group.y(10);
        group.addTo(svg);
        return svg.node;
    }

    download() {

        let blob = new Blob([this.svg.outerHTML]);

        let element = document.createElement("a");
        element.download = "w3c.svg";
        element.href = window.URL.createObjectURL(blob);
        element.click();
        element.remove();
    }





    static bezier(p1x, p1y, p2x, p2y) {

        let c1x = p1x + (p2x - p1x) / 1.5;
        let c1y = p1y;
        let c2x = p2x - (p2x - p1x) / 1.5;
        let c2y = p2y;

        let curve = `M ${p1x},${p1y} C${c1x},${c1y} ${c2x},${c2y} ${p2x},${p2y}`;

        let path = SVG().path(curve);
        path.attr({ fill: 'transparent', stroke: 'black', 'stroke-width': 3 });
        return path;
    }


    get modellingFunctions() {
        return {


            'AA-SESSION': (node) => {
                let row = new Row('parallel', node);
                for (let i = 0; i < node.originalChildNodes.length; i++) {

                    let m = this.model(node.originalChildNodes[i])
                    if (m) row.push(m);

                }

                return row;

            },


            'AA-SEQUENCE': (node) => {
                // let svgItem = SVG().rect(30,50).attr({fill:'transparent'});

                let row = new Row('serial', node);
                for (let i = 0; i < node.childNodes.length; i++) {

                    let m = this.model(node.childNodes[i])
                    if (m) row.push(m)
                }

                return row;

            },

            'AA-SCREEN': (node) => {
                let g = SVG().group();
                let rect = SVG().rect(30, 50).attr({ fill: 'transparent', stroke: 'black', 'stroke-width': 5, rx: 3 }).addTo(g);
                if (node.getAttribute('name')) {
                    let name = node.getAttribute('name');
                    let text = SVG().text(function (add) {
                        add.tspan(name).font({
                            family: 'serif',
                            style: 'italic',
                            size: '12px',
                            // weight: 'bold'
                        });
                    })

                    // let transparentText = text.clone().attr({stroke:'transparent', fill:'transparent'});
                    //this is really cheap for now, but add a transparent rectangle on top to compensate for the
                    //existence of text at the bottom, for centering calculations
                    let transparentGap = SVG().rect(10, 12).attr({ stroke: 'transparent', fill: 'transparent' });

                    text.addTo(g);
                    transparentGap.addTo(g);
                    rect.x(g.x() + g.width() / 2 - rect.width() / 2);
                    rect.y(g.height() / 2 - rect.height() / 2) + 10;
                    text.y(rect.y() + rect.height() + 5);
                    transparentGap.y(rect.y() - 5 - 12);
                }
                g.myNode = node;
                g.nocentering = true;
                return g;
            },

            'AA-CHOOSE': (node) => {

                let chooseRow = new Row('serial', node);
                chooseRow.strokeDashArray = '3';

                let chooseSVGItemStart = SVG().circle(20).attr({ fill: 'transparent', stroke: 'black', 'stroke-width': 5, 'stroke-dasharray': 0 });


                // let chooseSVGItemStart = SVG().group();
                // let pStart = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5, }).addTo(chooseSVGItemStart);
                // let text = SVG().text(function (add) {
                //     add.tspan('?').font({
                //         family: 'serif',
                //         style: 'italic',
                //         size: '50px',
                //         weight: 'bold'
                //     });

                // }).addTo(chooseSVGItemStart);
                // pStart.y(chooseSVGItemStart.y() + chooseSVGItemStart.height() / 2 - pStart.height() / 2);
                // window.pStart = pStart;
                // window.text = text;
                // window.g = chooseSVGItemStart;
                // // debugger;

                let chooseSVGItemEnd = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5 });
                let contentsRow = new Row('parallel', node);



                // let hasOtherwiseNode = false;
                for (let i = 0; i < node.childNodes.length; i++) {
                    // if (node.childNodes.nodeName === "AA-OTHERWISE") {
                    //     let hasOtherwiseNode = true;
                    // }
                    let m = this.model(node.childNodes[i]);
                    if (m) {
                        contentsRow.push(m);
                    }
                }




                chooseRow.push(chooseSVGItemStart);
                chooseRow.push(contentsRow);
                chooseRow.push(chooseSVGItemEnd);

                // let w = contentsRow.width();



                return chooseRow;

            },

            'AA-FUNCTION-RANDOM': (node) => {
                let item = new Row('serial', node);

                let g = SVG().group();

                // let rect = SVG().rect(30, 50).attr({ fill: 'transparent', stroke: 'red', 'stroke-width': 5 }).addTo(g);

                let text = SVG().text(function (add) {
                    add.tspan('f').font({
                        family: 'serif',
                        style: 'italic',
                        size: '50px',
                        weight: 'bold'
                    });
                    add.tspan('random ').font({
                        family: 'serif',
                        style: 'italic',
                        size: '15px'
                    })
                })
                text.addTo(g);
                // text.font({
                //     family: 'serif',
                //     style: 'italic',
                //     size: '50px'
                // })
                text.attr({ padding: 10 })




                let pStart = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5, }).addTo(g);
                let pEnd = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5, }).addTo(g);


                item.push(g);




                pStart.x(0);
                pEnd.x(item.width());
                pStart.y(item.height() / 2 - pStart.height() / 2);
                pEnd.y(item.height() / 2 - pStart.height() / 2)



                return item;
                // return {
                //     node: item,
                //     inputs:()=>{
                //         return [ [item.x(), item.cy()] ]
                //     },
                //     outputs:()=>{
                //         return [ [item.x() + item.width(), item.cy()] ]
                //     },
                // }

            },


            'AA-WHEN': (node) => {
                let row = new Row('serial', node);

                // let text = SVG().text(function (add) {
                //     add.tspan('when').font({
                //         family: 'serif',
                //         style: 'italic',
                //         size: '50px',
                //         weight: 'bold'
                //     });
                // })
                // row.push(text);


                let contentsRow = new Row('parallel');
                for (let i = 0; i < node.childNodes.length; i++) {

                    let m = this.model(node.childNodes[i])
                    if (m) contentsRow.push(m)

                }

                row.push(contentsRow);
                // contentsRow.x(row.width());
                return row;

            },

            'AA-OTHERWISE': (node) => {
                let row = new Row('parallel', node);
                for (let i = 0; i < node.childNodes.length; i++) {

                    let m = this.model(node.childNodes[i])
                    if (m) row.push(m)

                }

                return row;

            },

            'DIV': (node) => {
                // let svgItem = SVG().rect(30,50).attr({fill:'transparent'});
                debugger;
                let row = new Row('parallel', node);
                for (let i = 0; i < node.childNodes.length; i++) {

                    let m = this.model(node.childNodes[i])
                    if (m) row.push(m)
                }

                return row;

            },

        }
    }

    get examples() {
        return {

            'AA-SEQUENCE': {

                html: '<aa-sequence><aa-screen name="first screen"></aa-screen><aa-screen name="second screen"></aa-screen></aa-sequence>',
                comment: "sequence",

            },


            'AA-SCREEN': {

                html: '<aa-screen name="<name>"></aa-screen>',
                comment: "screen",

            },

            'AA-FUNCTION-RANDOM': {

                html: '<aa-function-random></aa-function-random>',
                comment: "random number generator",

            },

            'AA-CHOOSE': {

                html: '<aa-choose><aa-when><aa-screen></aa-screen></aa-when></aa-choose>',
                comment: "random number generator",

            }
        }
    }


}



export { mySVG }