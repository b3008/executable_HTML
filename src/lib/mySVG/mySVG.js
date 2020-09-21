import SVG from '../svg/svg.js';



var modellingFunctions = {


    'AA-SESSION': (node) => {
        let row = new Row('parallel', node);
        for (let i = 0; i < node.originalChildNodes.length; i++) {

            let m = mySVG.model(node.originalChildNodes[i])
            if (m) row.push(m);

        }

        return row;

    },


    'AA-SEQUENCE': (node) => {
        // let svgItem = SVG().rect(30,50).attr({fill:'transparent'});

        let row = new Row('serial', node);
        for (let i = 0; i < node.childNodes.length; i++) {

            let m = mySVG.model(node.childNodes[i])
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
            text.addTo(g);
            rect.x(g.x() + g.width() / 2 - rect.width() / 2);
            text.y(rect.height() + 5);
        }
        g.myNode = node;
        return g;
    },

    'AA-CHOOSE': (node) => {

        let chooseRow = new Row('serial', node);
        chooseRow.strokeDashArray = '3';

        // let chooseSVGItemStart = SVG().circle(20).attr({ fill: 'transparent', stroke: 'transparent', 'stroke-width': 5, 'stroke-dasharray': 0 });


        let chooseSVGItemStart = SVG().group();
        let pStart = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5, }).addTo(chooseSVGItemStart);
        let text = SVG().text(function (add) {
            add.tspan('?').font({
                family: 'serif',
                style: 'italic',
                size: '50px',
                weight: 'bold'
            });

        }).addTo(chooseSVGItemStart);
        pStart.y(chooseSVGItemStart.y() + chooseSVGItemStart.height() / 2 - pStart.height() / 2);
        window.pStart = pStart;
        window.text = text;
        window.g = chooseSVGItemStart;
        // debugger;

        let chooseSVGItemEnd = SVG().circle(2).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5 });
        let contentsRow = new Row('parallel', node);



        // let hasOtherwiseNode = false;
        for (let i = 0; i < node.childNodes.length; i++) {
            // if (node.childNodes.nodeName === "AA-OTHERWISE") {
            //     let hasOtherwiseNode = true;
            // }
            let m = mySVG.model(node.childNodes[i]);
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
        let row = new Row('parallel', node);
        for (let i = 0; i < node.childNodes.length; i++) {

            let m = mySVG.model(node.childNodes[i])
            if (m) row.push(m)

        }

        return row;

    },

    'AA-OTHERWISE': (node) => {
        let row = new Row('parallel', node);
        for (let i = 0; i < node.childNodes.length; i++) {

            let m = mySVG.model(node.childNodes[i])
            if (m) row.push(m)

        }

        return row;

    }

}


class Row {

    gap = 30;
    strokeDashArray;
    type;
    myNode;
    group;

    _x; _y;


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
                let firstItem = this.c[0];
                return this.getItemStartPoints(firstItem);


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
                let lastItem = this.c[this.c.length - 1];
                return this.getItemEndPoints(lastItem);


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
    c = [];

    constructor(type, node) {

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



    static model(node) {

        if (Object.keys(modellingFunctions).indexOf(node.nodeName) === -1) {
            return;
        }
        return modellingFunctions[node.nodeName](node);
    }


    static render(container, width, node) {
        let draw = SVG().addTo(container).size(1000, 1300);
        let defs = SVG(
            `<defs>
            <marker id="arrow" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,4 L5,2 z" fill="#000" />
            </marker>
          </defs>`
        );
        defs.addTo(draw);

        // var rect = SVG().rect(100, 100).attr({ fill: '#f06' });
        var group = SVG().group();

        window.draw = draw;

        group.addTo(draw);
        group.x(200);


        let item = mySVG.model(node);
        item.group.addTo(draw);


        let lines = item.renderLines();

        lines.addTo(draw);




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
    // static quadraticCurve(p1x, p1y, p2x, p2y, offs) {

    //     // see https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
    //     // for bezier;

    //     //for now this should be good enough;

    //     // mid-point of line:
    //     let mpx = (p2x + p1x) * 0.5;
    //     let mpy = (p2y + p1y) * 0.5;

    //     // angle of perpendicular to line:
    //     let theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;

    //     // distance of control point from mid-point of line:

    //     let offset = offs * 10;

    //     // location of control point:
    //     let c1x = mpx + offset * Math.cos(theta);
    //     let c1y = mpy + offset * Math.sin(theta);



    //     // construct the command to draw a quadratic curve
    //     let curve = 'M' + p1x + ' ' + p1y + ' Q ' + c1x + ' ' + c1y + ' ' + p2x + ' ' + p2y;

    //     let path = SVG().path(curve);
    //     path.attr({ fill: 'transparent', stroke: 'black' });
    //     return path;
    // }





}


if (window) {
    window.mySVG = mySVG;
    window.Row = Row;
    window.modellingFunctions = modellingFunctions;
}
export { mySVG }