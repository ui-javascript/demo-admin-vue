window.raf = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

$(function () {

    var $canvas = $('#cvs');
    var canvas = $canvas[0];
    var ctx = canvas.getContext('2d');

    var planet = new Image();
    // planet.src = "http://www.cvadrat.com/imagebank/pngs/planetary/gallery3/Virtual%20Planets%20Pluto%20Planet%2002.png";
    planet.src = "./images/planet.png";

    var thing = {

        pcount: 900,
        particles: [],
        width: 1040,
        height: 200,
        rad: 300,
        scanCount: 1,

        createParticle: function (x, y) {

            var r = 70 + Math.random() * 65 >> 0;
            var g = 110 + Math.random() * 155 >> 0;
            var b = 200 + Math.random() * 255 >> 0;
            var a = 0.5 + Math.random();

            return {

                x: x,
                y: y,
                vel: 0.3,
                color: {
                    r: r,
                    g: g,
                    b: b,
                    a: a
                },
                color2: {
                    r: r,
                    g: r,
                    b: r,
                    a: a
                },
                radius: 0.5,
                speed: 1 + Math.random() * 0.5,
                mx: (Math.random() * 10 - 5),
                my: (Math.random() * 10 - 5),
                no: 0

            };
        },

        storeParticles: function (count) {

            count = count || 1;
            var inc = Math.PI * 2 / count;


            for (var i = 0; i < count; i++) {

                var x = this.rad * Math.cos(inc * i) + this.width;
                var y = this.rad / 3 * Math.sin(inc * i) + this.width;

                this.particles.push(this.createParticle(x, y));

            }

        },

        drawParticles: function () {

            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "rgba(07, 07, 16, 0.1)";
            ctx.fillRect(0, 0, this.width, this.height);

            var destX = canvas.width / 2 - 92;
            var destY = 18;
            var destW = 184;
            var destH = 170;
            var sourceX = 100;
            var sourceY = 20;
            var sourceW = 580;
            var sourceH = 550;

            ctx.drawImage(planet, sourceX, sourceY, sourceW, sourceH, destX, destY, destW, destH);

            var plength = this.particles.length;
            for (var i = 0; i < plength; i++) {

                ctx.globalCompositeOperation = "lighter";
                ctx.beginPath();

                var p = this.particles[i];
                var ninx = inx + p.speed;

                p.nx = p.x;
                p.ny = p.y;


                // set the colours and widths of the rings.
                // every fourth particle goes to the inner ring, etc.
                var rsize, vel, tilt, c, scatter;
                if (i % 6 === 0) {

                    rsize = 0.6;
                    tilt = -0.1;
                    vel = p.vel * 0.4;
                    scatter = 6;
                    c = "rgba(" + p.color2.r + "," + p.color2.g + "," + p.color2.b + "," + p.no + ")";

                } else if (i % 4 === 0) {

                    rsize = 0.95;
                    tilt = 0.2;
                    vel = p.vel * 0.6;
                    scatter = 1.4;
                    c = "rgba(" + 255 + "," + 190 + "," + 190 + "," + p.no + ")";

                } else if (i % 5 === 0) {

                    rsize = 1.3;
                    tilt = 0.2;
                    vel = p.vel * 0.9;
                    scatter = 3.6;
                    c = "rgba(" + 240 + "," + 70 + "," + 150 + "," + p.no + ")";

                } else {

                    rsize = 1.1;
                    tilt = 0.2;
                    vel = p.vel * 0.7;
                    scatter = 10;
                    c = "rgba(" + p.color.r + "," + p.color.g + "," + p.color.b + "," + p.no + ")";

                }

                // calculate the position of this particle
                // based on the x coord, the increment and the speed.
                p.position = (p.x + (inx * p.speed)) * vel;

                p.xopts = {};
                p.xopts.ringWidth = (this.rad * rsize + (p.mx * scatter)); // width of the ring, radius * modifier.
                p.xopts.offset = (this.width / 2); // position in the canvas
                p.xopts.circularPosition = Math.cos(p.position); // calculated circular position

                p.nx = p.xopts.ringWidth * p.xopts.circularPosition + p.xopts.offset;

                p.yopts = {};
                p.yopts.ringWidth = (this.rad * rsize / 6); // height of the ring, radius * modifier (squished).
                p.yopts.offset = (this.height / 2 + (p.my * scatter / 9)); // position in the canvas
                p.yopts.circularPosition = Math.sin(p.position + tilt); // calculated circular position   

                p.ny = p.yopts.ringWidth * p.yopts.circularPosition + p.yopts.offset;

                p.no = Math.sin(p.position) / 2 + 0.6;

                ctx.fillStyle = c;
                ctx.arc(p.nx, p.ny, p.radius, Math.PI * 2, false);
                ctx.fill();

            }

        },

        render: function () {
            this.drawParticles();
        },

        init: function () {

            ctx.canvas.width = this.width;
            ctx.canvas.height = this.height;
            this.storeParticles(this.pcount);
        }

    };

    var inx = 0;
    planet.onload = function () {

        thing.init();

        (function animloop() {
            window.raf(animloop);
            thing.render();
            inx += 0.03;
        })();

    };

});