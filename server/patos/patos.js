const duck = require('../ejemplo')

class Mallar {
    mallar() {
        const mallard = new duck();
        mallard.performFly().fly();
        mallard.performFly().FlyWithWings();
    }
}

module.exports = Mallar