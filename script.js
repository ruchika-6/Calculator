let result = document.querySelector(".result-box");
let boxes = document.querySelectorAll(".box")
let ans = "";
var stack = [];
let ptr = -1;
let j = -1;
const MaxSize = 5;
for(box of boxes)
{
    box.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '=')
        {
            if(ptr+1==MaxSize)
            {
                stack.shift();
                ptr--;
            }
            stack.push(ans);
            ptr++;
            j = ptr+1;
            try {
                eval(ans); 
                let res = eval(ans);
                ans = res + "";
            } catch (e) {
                if (e instanceof SyntaxError) {
                    ans = undefined;
                }
            }
        }
        else if(e.target.innerHTML === 'AC')
        {
            ans = "";
        }
        else if(e.target.innerHTML === 'C')
        {
            let s = ans.slice(0,-1);
            ans = s;
        }
        else if(e.target.innerHTML === '&lt;')
        {
            if(j>0)
                j--;
            ans = stack[j];
        }
        else if(e.target.innerHTML === '&gt;')
        {
            if(j<ptr)
                j++;
            ans = stack[j];
        }
        else
        {
            let content = e.target.innerHTML;
            ans = ans + content;
        }
        if(ans=== undefined)
        {
            result.innerHTML = 'err'
            ans = "";
        }
        else
            result.innerHTML = ans;
    })
}