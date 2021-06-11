const kettleBoil = function(model, power, waterVolume) {
    this.model = model;
    this.power = power; 
    this.waterVolume = waterVolume;
    const tempInitial = 20;
    const tempFinal = 100;
    const c = 4186;
/*
   this.start = function() { //метод включения чайника
        
    }

    this.finish = function() {  //метод выключения чайника
            
    }
*/
    this.boilTime = function() { //метод закипания чайника 
        return (waterVolume*c*(tempFinal - tempInitial)) / power;
    }
    
}

const XiaoMi = new kettleBoil('XiaoMi', 1800, 1.5)
const Scarlett = new kettleBoil('Scarlett', 1350, 2)
const Maxwell = new kettleBoil('Maxwell', 1850, 1.8)
const Ornay = new kettleBoil('L Ornay', 1800, 1.7)
const Philips = new kettleBoil('Philips', 2400, 1.6)

console.log(XiaoMi, 'время закипания полного чайника = ' + Math.round(XiaoMi.boilTime()) + ' сек')
console.log(Scarlett, 'время закипания полного чайника = ' + Math.round(Scarlett.boilTime()) + ' сек')
console.log(Maxwell, 'время закипания полного чайника = ' + Math.round(Maxwell.boilTime()) + ' сек')
console.log(Ornay, 'время закипания полного чайника = ' + Math.round(Ornay.boilTime()) + ' сек')
console.log(Philips, 'время закипания полного чайника = ' + Math.round(Philips.boilTime()) + ' сек')
