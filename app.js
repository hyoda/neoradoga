const ev = () => {
  return {
    handleTitleClick: (e) => {
      console.log('title was clicked ', e)
      count++;
      e.target.innerText = "언제까지 클릭만 할꺼니? " + count + '번'
      e.target.style.color = "blue"
    },
    leftCenterRightClick: (e) => {
      if (e.target.align === 'left') {
        e.target.align = 'center'
      } else if( e.target.align === 'center') {
        e.target.align = 'right'
      } else {
        e.target.align = 'left'
      }    
    },
    allEvent: (e) => {
      console.dir(e)
    }
  }
};



console.log('ev => ', ev())
const evt = ev();
let count = 0;

const title = "너라도가!!!"

document.title = title

document.querySelector('h1.title').innerText = "여긴 클릭해도 카운트만 되어요."

const h1Title = document.querySelector('h1.title')
const h2Title = document.querySelector('h2.title')
const funcBtn1 = document.querySelector('button')
h1Title.addEventListener('click', evt.handleTitleClick)


h1Title.addEventListener('on', evt.allEvent)
h2Title.addEventListener('click', evt.leftCenterRightClick)
const shortcutLabel = funcBtn1.accessKeyLabel || funcBtn1.accessKey;
funcBtn1.title += `[${shortcutLabel.toUpperCase()}]`

funcBtn1.onclick = () => {
  const feedback = document.createElement('output')
  feedback.textContent = 'Pressed!';
  funcBtn1.insertAdjacentElement('afterend', feedback)
}