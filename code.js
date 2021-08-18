

let response = fetch('https://aboutwhite.github.io/data/data.txt')
.then(res=> res.text())
.then(data=> console.log(data))



//load list of words when load the window
//init();


//show translation and info when click on word
show = function (i){
        document.getElementById("word-text").innerHTML = dictionary[i].german;
        document.getElementById("info").innerHTML = dictionary[i].info;
}

search = function() {
        let query = document.getElementById('search').value;

        if (query == ""){
                return;
        }

        //init found to false
        let found = -1;

        for(let i=0; i< dictionary.length; i++){
                if(query == dictionary[i].english){
                        found = i;
                        break;
                }else {
                        document.getElementById("word-text").innerHTML = "word not found";
                        document.getElementById("info").innerHTML ="";
                }
        }

        if ( found >= 0){
                show (found);

        }
}

       