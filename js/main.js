function gain(in1,out1,princ1){
                                        let ans = (out1-in1)*princ1
                                        return ans
                                }
function disp1(content1){
                                const tgtDisp1 = document.getElementById('results')
                                tgtDisp1.innerHTML = "$" + content1.increase + " ups  (" + content1.percent +" %)"
                        }
function disp2(content1){
        const tgtDisp1 = document.getElementById('results')
        tgtDisp1.innerHTML = content1.msg
}
function action1(){
                        //const out1 = document.querySelector('high').value
                        const out1 = document.getElementById('high').value
                        //const in1 = document.querySelector('low').value
                        const in1 = document.getElementById('low').value
                        //const princ1 = document.querySelector('base').value
                        const princ1 = document.getElementById('base').value
                        if( (in1=='') || (out1=='') || (princ1=='') ){
                                        // alert('need values')
                                        disp2({msg:'need values'})
                                }else{
                                        console.log("runs anyhow")
                                        ans = gain(in1, out1, princ1)
                                        //send values to local storage
                                        action2( {'entry':in1, 'exit':out1, 'principal':princ1},'store')
                                        disp1({'increase':ans.toFixed(2),'percent':( ((out1-in1)/in1)*100 ).toFixed(2)})
                        }
//}
                        }
function action2(data1, what1){
                                // localStorage save and read
                                if(what1 == null || what1 == 'store'){
                                        let ans ={'exit':data1.exit, 'entry':data1.entry, 'principal':data1.principal}
                                        console.log('storing')
                                        console.log(ans)
                                        // localStorage.setItem('data',ans)
                                        localStorage.setItem('exit',ans.exit)
                                        localStorage.setItem('entry',ans.entry)
                                        localStorage.setItem('principal',ans.principal)
                                }else{
                                        if(what1 == 'recall' ||what1 == 'pull' || what1 == 'read'){
                                                let ans1 = {}
                                                //pull values from localStorage
                                                ans1['exit']=localStorage.getItem('exit')
                                                ans1['entry']=localStorage.getItem('entry')
                                                ans1['principal']=localStorage.getItem('principal')
                                                //send values to input fields
                                                populate(ans1)
                                                console.log("recall, recall")
                                                return ans1
                                        }else{
                                                console.log('local storage command err. action2(data,store/read')
                                        }
                                }
                                                        }
function populate(data){
                                // load the three fields with data if available
                                let out1 = document.getElementById('high')
                                out1.setAttribute('value',data.exit)
                                let in1 = document.getElementById('low')
                                in1.setAttribute('value',data.entry)
                                let princ1 = document.getElementById('base')
                                princ1.setAttribute('value',data.principal)
                                                }
function clearout(){
                                // load the three fields with data if available
                                let out1 = document.getElementById('high')
                                out1.setAttribute('value','')
                                let in1 = document.getElementById('low')
                                in1.setAttribute('value','')
                                let princ1 = document.getElementById('base')
                                princ1.setAttribute('value','')
                                                }

function loadup(){
                        //load values from local storage if available
                        try{
                                let ans = action2( '','read')
                                console.log("loadup.")
                                return ans
                        } catch (error) {
                                console.error(error)

                        }
                }
// function showlocal(){
                        //         console.log(  localStorage.getItem('exit')  )
                        //         console.log(  localStorage.getItem('entry')  )
                        //         console.log(  localStorage.getItem('principal')  )
                        //         // console.log( test1.prinicpal )
                        // }
                        // function testpop(){
                        //         let data = {'exit':100,'entry':90,'principal':20}
                        //         populate(data)
                        // }
document.querySelector('button').addEventListener('click', action1)