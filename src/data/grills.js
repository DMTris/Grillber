//Creating a Grill class
export default class {
/**
  * constructor method
  * @param brand
  * @param series
  * @param name
  * @param fuel
  * @param size
  * @param price
  * @param isRented
*/
  constructor( brand, series, name, fuel, size, price, isRented ){
    this.brand = brand;
    this.series = series;
    this.name = name;
    this.fuel = fuel;
    this.size = size;
    this.price = price;
    this.isRented = isRented;
  }
}
