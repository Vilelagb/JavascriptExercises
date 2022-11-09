let medida = prompt("Digite em metros a medida que deseja converter")
let valorConvertido = prompt("Digite para quanto quer converter: \n-milímetros(mm) \n-centímetros(cm) \n-decímetros(dm) \n-decâmetro(dam) \n-hectômetro(hm) \n-quilômetro(km)")

medida = parseFloat(medida)

switch (valorConvertido) {
    case "mm":
        alert("O valor de " + medida + " metros(m) convertido para milímetros(mm) é de " + (medida * 1000) + "mm")
        break
    case "cm":
        alert("O valor de " + medida + " metros(m) convertido para centímetros(cm) é de " + (medida * 100) + "cm")
        break
    case "dm":
        alert("O valor de " + medida + " metros(m) convertido para decâmetro(dm) é de " + (medida * 10) + "dm")
        break
    case "dam":
        alert("O valor de " + medida + " metros(m) convertido para decâmetro(dam) é de " + (medida * 0.1) + "dam")
        break
    case "hm":
        alert("O valor de " + medida + " metros(m) convertido para hectômetro(hm) é de " + (medida * 0.01) + "hm")
    case "km":
        alert("O valor de " + medida + " metros(m) convertido para quilômetro é de " + (medida * 0.001) + "km")
        break
    default:
        alert("Escolha uma unidade de medida válida")    
}