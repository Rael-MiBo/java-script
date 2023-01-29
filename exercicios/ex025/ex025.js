let temperatura = 45
let temperaturaalta = temperatura >=42
temperaturafebre = temperatura >= 37
hipotermia = temperatura <= 35

if (temperaturaalta) {
    console.log('Vá ao hospital urgentemente, sua temperatura está altissima')
} else if (temperaturafebre) {
    console.log('Você definitivamente está com febre')
}else if (hipotermia) {
    console.log('Sua temperatura está muito baixa, vá ao hospital')
} else {
    console.log('você está bem, continue assim')
}