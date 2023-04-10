// module.exports = { name : 'mike' }
let imgIdx = 0, timer = null, timerState = true;
 export const Pfn = (el,color) => {
                console.log(el, el.previousElementSibling, color);
                el.style.color = 'red';
                el.innerHTML = 'ABCD'
              },
              imgShowFn = (el,length,val=1) => {
                el.children[imgIdx].style = '';
                imgIdx += val;
                imgIdx = (imgIdx + length) % length;
                el.children[imgIdx].style.display = 'block';
              },
              autoFn = (el,length) => {
                if(timerState) timer = setInterval(() => imgShowFn(el,length), 1000);
              },
              stopFn = () => clearInterval(timer),
              imgSwitchFn = (el) => {
                timerState = !timerState;
                el.innerHTML = timerState ? '暫停' : '播放';
              };
// export default add;