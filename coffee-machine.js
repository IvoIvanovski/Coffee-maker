
 class CoffieMachine {

cupWater = 100
cupMilk = 20
cupCoffee = 7

    constructor(water, milk, coffee, cofeeMade) {
        this.water = water
        this.milk = milk
        this.coffee = coffee
        this.cofeeMade = cofeeMade
   
    }

    oneCafe () {
      const { cupWater, cupMilk, cupCoffee } = this
        if (this.water <= 0 || this.milk <= 0 || this.coffee <= 0){
            console.log(`There is not enough resources to make coffie, check the machine for 
            ${this.water - cupWater} ml. water, ${this.milk - cupMilk} ml. milk, ${this.coffee - cupCoffee} g. cofee`)
            return
        }
        this.water -= cupWater
        this.milk -= cupMilk
        this.coffee -= cupCoffee
        this.cofeeMade++
        console.log(`Your cofee is ready. Cofee's made: (${this.cofeeMade})`)
    }
    } 

 
  const caffe = new CoffieMachine(1000, 100, 100, 0)

caffe.oneCafe()
caffe.oneCafe()
caffe.oneCafe()
caffe.oneCafe()
caffe.oneCafe()
caffe.oneCafe()
caffe.oneCafe()





        
