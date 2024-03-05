const Temperatura = () => {
  const celsiusParaFahrenheit = (c) => {
    return (c * 9/5) + 32;
  }

  const fahrenheitParaCelsius = (f) => {
    return (f - 32) * 5/9;
  }

  const kelvin = (k) => {
    const celsius = k - 273.15;
    const fahrenheit = celsiusParaFahrenheit(celsius);
    return { celsius, fahrenheit };
  }

  let celsius = 31;
  let fahrenheit = 88;
  let kelvinValue = 304;
  let { celsius: celsiusKelvin, fahrenheit: fahrenheitKelvin } = kelvin(kelvinValue);

  return (
    <div>
      <h1>Conversor de Temperatura</h1>
      <h2>Celsius para Fahrenheit: {celsiusParaFahrenheit(celsius)}</h2>
      <hr />
      <h2>Fahrenheit para Celsius: {fahrenheitParaCelsius(fahrenheit)}</h2>
      <hr />
      <h2>Para {kelvinValue} Kelvin: Celsius = {celsiusKelvin}, Fahrenheit = {fahrenheitKelvin}</h2>
    </div>
  )
}

export default Temperatura
