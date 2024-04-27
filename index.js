let words1 = [['Mami','Bebe','Princess','Mamasonga'],
['yo quiero','yo puedo','yo vengo a','voy a'],
['encenderte','amarte','ligar','jugar'],
['suave','lento','rapido','fuerte','rico'],
['hasta que salga el sol','toda la noche','hasta el amanecer','todo el dia'],
['sin anestesia','sin compromiso','feis to feis','sin miedo']];

let song = [];

const randomizer = (array) => {
    return Math.floor(Math.random() * array.length);
}

const songConstructor = (array) => {
    song.push(array[randomizer(array)])
}

words1.forEach(songConstructor);

console.log(song);

