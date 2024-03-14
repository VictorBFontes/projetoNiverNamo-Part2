

function selectOption(option) {

    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementsByClassName('question')[0].style.display= 'none';

            displayCatHeart();
        });
        } else if (option === 'no') {
            document.getElementById('no-button') .innerText = 'Tem certeza??';
            
            var yesButton = document.getElementById('yes-button');
            var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
            var newSize = parseFloat(currentFontSize) * 2;

            yesButton.style.fontSize = newSize + 'px';
        } else {
            alert('Opção errada!!');
        }
    }

    function flashRainbowColors(callback) {
        var colors = [
            '#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'
        ];
        var i = 0;
        var interval = setInterval(function() {
            document.body.style.backgroundColor = colors[i];
            i = (i + 1) % colors.length;
        }, 200);
        setTimeout(function() {
            clearInterval(interval);
            document.body.style.backgroundColor = '';

            if (callback) {
                callback();
            }
        }, 2000);
    }

    function displayCat() {
        var imageContainer = document.getElementsByClassName('image-container');
        var catImage = new Image();

        catImage.src = 'cat.gif';

        catImage.alt = 'Cat';
        catImage.onload = function() {
            imageContainer[0].appendChild(catImage);
        };
    }

    function displayCatHeart() {
        document.getElementsByClassName('image-container')[0] .innerHTML = '';

        var imageContainer = document.getElementsByClassName('image-container');

        var catHeartImage = new Image();

        catHeartImage.src = 'big-hug-mor.gif';
        catHeartImage.alt = 'Amorr';
        catHeartImage.onload = function() {
            imageContainer[0].appendChild(catHeartImage);
            document.getElementsByClassName('options')[0].style.display = 'none';
        };
    }

    displayCat();