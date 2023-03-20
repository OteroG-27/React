const percho = ["BMW", "Mercedes benz", "Bugatti"];
const [BMW, Mercho, Buga] = percho;
console.log(BMW, Mercho, Buga);

const sun = (num, num2) => {
  const sumaD = num + num2;
  const mul = num * num2;
  const resta = num - num2;

  return [sumaD, mul, resta];
};
const [sumaD, mul, resta] = sun(1, 2);
console.log(sumaD, mul, resta);

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2022,
  color: "red",
};

// ruta antigua
function myVehicle(vehicle) {
  return `My ${vehicle.type} is a ${vehicle.color} ${vehicle.brand} ${vehicle.model}`;
}
console.log(`Forma old: ${myVehicle(vehicleOne)}`);

// ruta New York
const myVehicleAA = ({brand,model,type,year,color}) => {
    return `My carro es marca ${model} del año ${year}`;
}
console.log(myVehicleAA(vehicleOne));

const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com',
      repocitories: 'https://github.com/OteroG-27'
    }
  }
};
const {twitter, facebook} = wes.links.social;
console.log(`Redes Sociales: ${twitter} y ${facebook}`);
const {repocitories: gitHub} = wes.links.web;
console.log(`Perfil de GitHub: ${gitHub}`);

const cumpleYears ={
  day: 8
}
const {dia = 4, month:mes = 'Abril' } = cumpleYears;
console.log(`Cumpleaños: ${dia} de ${mes}`);


const mySpeed =  0;
const speed = mySpeed || 760; 
console.log(speed);

const { dogName = 'snickers' } = { dogName: undefined }
console.log(dogName) // what will it be? 'snickers'!
const { dogNameDos = 'snickers' } = { dogNameDos: null }
console.log(dogNameDos) //No es posible Cambiar el valor null de una propiedad de un objeto
//destructurado porque null es  un valor primmitivo y, por lo tanto es inmutable

console.log("-------------------------------------------------------");
