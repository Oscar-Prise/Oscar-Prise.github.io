
threeSixty = {
    init: function () {
    this._vr = new AC.VR('viewer', 'images/Frame######.png', [36, 1], {
            invert: false,
            initialPos: [18, 0],  // frame 19 is the front view (frame 1 is the back)
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
