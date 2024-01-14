function footer() {
  const text1 = 'Just to be clear, im not making money with this';
  const img1 = '<img src="./images/justToBeClear.jpeg">';

  const text2 = 'Just to be clear';
  const img2 = '<img src="./images/justToBeClear3.jpeg"">';

  const text3 = 'And I didnt pay for the rights of anything in here but its for study purposes only so just be cool about it..';
  const img3 = '<img src="./images/justToBeClear2.jpeg">';

  const text4 = 'Just to be clear';
  const img4 = '<img src="./images/justToBeClear3.jpeg">';


  var slideText = [text1, text2, text3, text4];
  var slideImg = [img1, img2, img3, img4];
  var i = 0;
  var intervalId = setInterval(function() {
    document.getElementById('slide-text').innerHTML = slideText[i];
    document.getElementById('slide-img').innerHTML = slideImg[i];
    if (i == (slideText.length - 1)) {
      i = 0;

    } else {
      i++;
    }
  }, 4000);
};


function rules() {

  const rules1 = "Dayman beats Nightman";

  const rules2 = "Nightman beats Troll";

  const rules3 = "Troll beats Dayman";


  var rules = [rules1, rules2, rules3];
  var i = 0;
  var intervalId = setInterval(function() {
    document.getElementById('rules').innerHTML = rules[i];
    if (i == (rules.length - 1)) {
      i = 0;

    } else {
      i++;
    }
  }, 4000)
};


footer ();
rules ();