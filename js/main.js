                function gain(in1,out1,princ1){
                                                                  let ans = (out1-in1)*princ1
                                                                  return ans
                                                             }
                function disp1(content1){
                                                      const tgtDisp1 = document.getElementById('results')
                                                      tgtDisp1.innerHTML = content1.increase + " ups  (" + content1.percent +" %)"
                                                             }
                function action1(){
                                                      //const out1 = document.querySelector('high').value
                                                      const out1 = document.getElementById('high').value
                                                      alert(out1)
                                                      //const in1 = document.querySelector('low').value
                                                      const in1 = document.getElementById('low').value
                                                      //const princ1 = document.querySelector('base').value
                                                      const princ1 = document.getElementById('base').value
                                                      ans = gain(in1, out1, princ1)
                                                      console.log(ans)
                                                      disp1({'increase':ans.toFixed(2),'percent':(out1/in1).toFixed(2)})

                                              }
                
                document.querySelector('button').addEventListener('click', action1)