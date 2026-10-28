
threeSixty = {
    init: function () {
    this._vr = new AC.VR('viewer', 'images/Frame######.png', [36, 1], {
            invert: false,
            initialPos: [9, 0],  // frame 10 is the front view
            intro: null       // skip the default half-spin on load
        });
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, "_vr");
    },
    shouldCache: function() {
        return false;
    }
}
if (!window.isLoaded) {
    window.addEventListener("load", function() {
        threeSixty.init();
    }, false);
}
