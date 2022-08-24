            function KQ()
            {
                var so1=document.getElementById("so1").value;
                var so2=document.getElementById("so2").value;
                let kq=document.getElementById("kq");
                var choice=document.querySelectorAll("#choice input");
                for(var i=0;i<choice.length;i++)
                {
                    if(choice[i].checked)
                    {
                        switch(choice[i].value)
                        {
                            case 'cong':
                                kq.value=Number(so1)+Number(so2);
                                break;
                            case 'tru':
                                kq.value=Number(so1)-Number(so2);
                                break;
                            case 'nhan':
                                kq.value=Number(so1)*Number(so2);
                                break;
                            case 'chia':
                                kq.value=Number(so1)/Number(so2);
                                break;
                        }
                    }
                }
            }

