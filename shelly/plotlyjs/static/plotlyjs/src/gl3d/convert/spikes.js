'use strict'

module.exports = createSpikeOptions

var str2RGBArray = require('../lib/str2rgbarray');

var AXES_NAMES = ['xaxis', 'yaxis', 'zaxis']

function SpikeOptions() {
    this.enabled = [true, true, true];
    this.colors = [[0,0,0,1],
                   [0,0,0,1],
                   [0,0,0,1]];
    this.drawSides = [true, true, true];
    this.lineWidth = [1,1,1];
}

var proto = SpikeOptions.prototype

proto.merge = function(sceneLayout) {
    var opts = this;
    for (var i = 0; i < 3; ++i) {
        var axes = sceneLayout[AXES_NAMES[i]];

          this.enabled[i] = axes.showspikes;
          this.colors[i] = str2RGBArray(axes.spikecolor);
          this.drawSides[i] = axes.spikesides;
          this.lineWidth[i] = axes.spikethickness;
    }
}

function createSpikeOptions(layout) {
    var result = new SpikeOptions()
    result.merge(layout)
    return result
}
