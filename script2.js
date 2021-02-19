/*
To calculate the efficiency of the kettle you need to find how much energy the water absorbed to bring it to boiling point.
Use the formula Q = mc (Tf - Ti), where m = mass of water, c = specific heat of water, Tf = final temperature and Ti = initial temperature.
Then divide this value by the time it took to bring the water to boiling and you get the power consumed in boiling the water.
Finally you divide this value by the power rating of the element to give the efficiency of the kettle.
The following example is based on a kitchen kettle with an element rating of 2, 200 watts:
m = 0.5 kg, c = 4186 J / kgoC, Tf = 100oC, Ti = 22oC.
So Q = 0.5 × 4186 × (100 - 22) = 163, 254 Joules
The time taken to bring the water to boil was 94 seconds.
Therefore the power consumed to boil the water = 163, 254 / 94 = 1, 737 Watts
To find the efficiency of the kettle divide the power used to boil the water by the power output of the element and multiply by 100 to give a percentage value, i.e. (1, 737 / 2, 200) × 100 = 79%.
The efficiency of the kitchen kettle is 79%, or 21% of the power output is wasted.

*/

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