
        const loadingText = document.getElementById("loading-text");
        const activityName = document.getElementById("activity-name");
        const NewContent = document.getElementById("content");
        
        activityName.innerHTML ="";
        NewContent.innerHTML="";
        // typeName.innerHTML = "";
        // participantsName.innerHTML = "";
        // priceName.innerHTML = "";
        // linkName.innerHTML = "";

        function getAnActivity(){
        
            loadingText.hidden=false;
            fetch("https://www.boredapi.com/api/activity")
                .then(async (res) =>{
                    const data = await res.json();
                    NewContent.innerHTML=`
                    <div class="content">
                    <div class="sub-content">
                        <div id="activity-name">${data.activity}</div>
                        <div id="type" ><i class="fa fa-tags" aria-hidden="true"></i>Type:   ${data.type}</div>
                        <div id="participants"><i class="fa fa-paw" aria-hidden="true"></i>Partcipants: ${data.participants}</div>
                        <div id="price"><i class="fa fa-usd" aria-hidden="true"></i>Price: ${data.price}</div>
                        <div id="link"><i class="fa fa-link" aria-hidden="true"></i>Link: ${data.link}</div>
                    </div>
                </div>
                    `
                 }).catch((err) =>{
                    console.log(err)
                }).finally(() =>{
                    loadingText.hidden = true;
                })
        }