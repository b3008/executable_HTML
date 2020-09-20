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

        let svgItem = SVG().rect(30, 50).attr({ fill: 'transparent', stroke: 'black', 'stroke-width': 5 });
        svgItem.myNode = node;
        return svgItem;
    },

    'AA-CHOOSE': (node) => {

        let chooseRow = new Row('serial', node);
        chooseRow.strokeDashArray = '3';

        let chooseSVGItemStart = SVG().circle(20).attr({ fill: 'transparent', stroke: 'black', 'stroke-width': 5, 'stroke-dasharray': 0 });
        let chooseSVGItemEnd = SVG().circle(10).attr({ fill: 'black', stroke: 'black', 'stroke-width': 5, 'stroke-dasharray': 3 });
        let contentsRow = new Row('parallel', node);



        let hasOtherwiseNode = false;
        for (let i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes.nodeName === "AA-OTHERWISE") {
                let hasOtherwiseNode = true;
            }
            let m = mySVG.model(node.childNodes[i])
            if (m) contentsRow.push(m)
        }




        chooseRow.push(chooseSVGItemStart);
        chooseRow.push(contentsRow);
        chooseRow.push(chooseSVGItemEnd);

        let w = contentsRow.width();



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
                size: '50px'
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
            break;

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
            break;

        case 'parallel': {
            let points = [];
            for (let i = 0; i < this.c.length; i++) {
                points = points.concat(this.getItemEndPoints(this.c[i]));
            }
            return points;
            break;
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

            // let path = mySVG.quadraticCurve(p1[0], p1[1], p2[0], p2[1], offset);
            let path = mySVG.bezier(p1[0], p1[1], p2[0], p2[1], offset);
            if (this.strokeDashArray) path.attr({ 'stroke-dasharray': this.strokeDashArray });
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
            let startPoints = this.getItemStartPoints(this.c[i + 1])

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
        var rect = SVG().rect(100, 100).attr({ fill: '#f06' });
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
    static quadraticCurve(p1x, p1y, p2x, p2y, offs) {

        // see https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
        // for bezier;

        //for now this should be good enough;

        // mid-point of line:
        let mpx = (p2x + p1x) * 0.5;
        let mpy = (p2y + p1y) * 0.5;

        // angle of perpendicular to line:
        let theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;

        // distance of control point from mid-point of line:

        let offset = offs * 10;

        // location of control point:
        let c1x = mpx + offset * Math.cos(theta);
        let c1y = mpy + offset * Math.sin(theta);



        // construct the command to draw a quadratic curve
        let curve = 'M' + p1x + ' ' + p1y + ' Q ' + c1x + ' ' + c1y + ' ' + p2x + ' ' + p2y;

        let path = SVG().path(curve);
        path.attr({ fill: 'transparent', stroke: 'black' });
        return path;
    }


    static line(pointA, pointB) {
        const lengthX = pointB[0] - pointA[0]
        const lengthY = pointB[1] - pointA[1]
        return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX)
        }
    }

    // Position of a control point 
    // I:  - current (array) [x, y]: current point coordinates
    //     - previous (array) [x, y]: previous point coordinates
    //     - next (array) [x, y]: next point coordinates
    //     - reverse (boolean, optional): sets the direction
    // O:  - (array) [x,y]: a tuple of coordinates
    static controlPoint(current, previous, next, reverse) {
        // When 'current' is the first or last point of the array
        // 'previous' or 'next' don't exist.
        // Replace with 'current'
        const p = previous || current
        const n = next || current
        // The smoothing ratio
        const smoothing = 0.2
        // Properties of the opposed-line
        const o = line(p, n)
        // If is end-control-point, add PI to the angle to go backward
        const angle = o.angle + (reverse ? Math.PI : 0)
        const length = o.length * smoothing
        // The control point position is relative to the current point
        const x = current[0] + Math.cos(angle) * length
        const y = current[1] + Math.sin(angle) * length
        return [x, y]
    }

    // Create the bezier curve command 
    // I:  - point (array) [x,y]: current point coordinates
    //     - i (integer): index of 'point' in the array 'a'
    //     - a (array): complete array of points coordinates
    // O:  - (string) 'C x2,y2 x1,y1 x,y': SVG cubic bezier C command
    static bezierCommand(point, i, a) {
        // start control point
        const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point)
        // end control point
        const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true)
        return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
    }

    // Render the svg <path> element 
    // I:  - points (array): points coordinates
    //     - command (function)
    //       I:  - point (array) [x,y]: current point coordinates
    //           - i (integer): index of 'point' in the array 'a'
    //           - a (array): complete array of points coordinates
    //       O:  - (string) a svg path command
    // O:  - (string): a Svg <path> element
    static svgPath(points, command) {
        // build the d attributes by looping over the points
        const d = points.reduce((acc, point, i, a) => i === 0
            // if first point
            ? `M ${point[0]},${point[1]}`
            // else
            : `${acc} ${command(point, i, a)}`
            , '')
        return `<path d="${d}" fill="none" stroke="grey" />`
    }



}


if (window) {
    window.mySVG = mySVG;
    window.Row = Row;
    window.modellingFunctions = modellingFunctions;
}
export { mySVG }