//GLOBAL VARIABLES
var affirmations = ['I forgive myself and set myself free.', 'I believe I can be all that I want to be.', 'I am in the process of becoming the best version of myself.', 'I have the freedom & power to create the life I desire.', 'I choose to be kind to myself and love myself unconditionally.', 'My possibilities are endless.', 'I am worthy of my dreams.', 'I am enough.', 'I deserve to be healthy and feel good.', 'I am full of energy and vitality and my mind is calm and peaceful.', 'Every day I am getting healthier and stronger.', 'I honor my body by trusting the signals that it sends me.', 'I manifest perfect health by making smart choices.'];
var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.', 'Don’t let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.', 'I am free from sadness.', 'I am enough.', 'In the beginning it is you, in the middle it is you and in the end it is you.', 'I love myself.', 'I am present now.', 'Inhale the future, exhale the past.', 'This too shall pass.', 'Yesterday is not today.', 'The only constant is change.', 'Onward and upward.', 'I am the sky, the rest is weather.'];

//QUERY SELECTORS
var receiveMessageButton = document.querySelector('.receive-message');
var buddhaImage = document.querySelector('.buddha-img');
var messageResult = document.querySelector('.full-message');
var choiceAffirmation = document.querySelector('#affirmation');
var choiceMantra = document.querySelector('#mantra');
var clearMessageButton = document.querySelector('.clear-message');

//EVENT LISTENERS
receiveMessageButton.addEventListener('click', viewMessage);
clearMessageButton.addEventListener('click', clearMessage);

//FUNCTIONS
function getRandomElement(array) {
  return array[Math.floor(Math.random()*array.length)];
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function selectChoice() {
	if (choiceAffirmation.checked) {
		messageResult.innerText = `${getRandomElement(affirmations)}`;
	} else if (choiceMantra.checked) {
		messageResult.innerText = `${getRandomElement(mantras)}`;
	};
};

function viewMessage() {
  if(choiceAffirmation.checked || choiceMantra.checked) {
    selectChoice();
    hide(buddhaImage);
    show(messageResult);
    show(clearMessageButton);
  } else {
    alert("Please select 1 of 2 options!");
  };
};

function clearMessage() {
  hide(messageResult);
  show(buddhaImage);
  hide(clearMessageButton);
  choiceAffirmation.checked = false;
  choiceMantra.checked = false;
};
