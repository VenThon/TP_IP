
const loadingText = document.getElementById("loading-text");
        const finput = document.getElementById("input");
        const NewContent = document.getElementById("content");
        NewContent.innerHTML="";

        function GetData(){
           
            loadingText.hidden=false;
            fetch(`https://api.genderize.io?name=${finput.value}`)
                .then(async (res) =>{
                    const data = await res.json();
                   
                    NewContent.innerHTML=`
                    <div class="content">
                        <div class="sub-content">
                            <div id="name">${data.name}</div>
                            <div id="gender">${data.gender}</div>
                            <div id="persent">${data.probability*100}%</div>
                        </div>
                    </div>
                    `

                }).catch((err) =>{
                    console.log(err);
                }).finally(() =>{
                    loadingText.hidden = true;
                })
        }