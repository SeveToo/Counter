const subtractBtn = document.querySelector('.btn__sign--subtract');
const addBtn = document.querySelector('.btn__sign--add');
const numberBtn = document.querySelector('.btn__number');

let count = 0;

const subtract = () => {
  if (count > 0) {
    count--;
    numberBtn.textContent = count;
  }
};

const add = () => {
  count++;
  numberBtn.textContent = count;
};

const getStyleNumber = () => {
  let getStyle = window.getComputedStyle(numberBtn);
  let left = parseInt(getStyle.left);
  let right = parseInt(getStyle.right);
  return { left, right };
};

const dragNumber = ({ movementX }) => {
  let { left, right } = getStyleNumber();
  console.log(movementX);
  numberBtn.style.left = `${left + event.movementX}px`;
};

const centerButton = () => {
  numberBtn.style.transition = 'all 0.3s ease';
  numberBtn.style.left = '1.5em';
};

const mathOnDrag = () => {
  let { left, right } = getStyleNumber();
  if (left <= 10) subtract();
  if (right <= 10) add();
};

subtractBtn.addEventListener('click', () => subtract());
addBtn.addEventListener('click', () => add());

numberBtn.addEventListener('mousedown', () => {
  numberBtn.addEventListener('mousemove', dragNumber);
  numberBtn.style = `none`;
});

numberBtn.addEventListener('mouseup', () => {
  numberBtn.removeEventListener('mousemove', dragNumber);
  centerButton();
  mathOnDrag();
});

numberBtn.addEventListener('mouseleave', () => {
  numberBtn.removeEventListener('mousemove', dragNumber);
  centerButton();
  mathOnDrag();
});
