const inputMeter = document.querySelector('#meter');
const inputCentimeter = document.querySelector('#centimeter');

inputCentimeter.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'db.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);

            inputMeter.value = (inputCentimeter.value * data.metrics.centimeter).toFixed(2);

        } else {
            alert('Something went wrong! Please try again');
        }
    });
});

inputMeter.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET',' db.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);

            inputCentimeter.value = inputMeter.value * data.metrics.meter;
        } else {
            alert('Sorry something went wrong! Please try again');
        }
    });
});