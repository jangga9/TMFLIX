document.getElementById("nav-add-episode").disabled = true;

document.getElementById('search-series-name').addEventListener("focusin",function(){

    document.getElementById('add-episode-suggestions').style.display = 'flex';
    document.getElementById('add-episode-suggestions').style.flexDirection = 'column';
    document.getElementById('add-episode-suggestions').style.alignItems = 'flex-start';
    document.getElementById('add-episode-suggestions').style.padding = '5px 16px 16px 16px';
    document.getElementById('add-episode-suggestions').style.marginLeft = '5px';
    document.getElementById('add-episode-suggestions').style.minWidth = '250px';
    document.getElementById('add-episode-suggestions').style.maxWidth = '300px';
    document.getElementById('add-episode-suggestions').style.maxHeight = (window.innerHeight*0.8)+'px';
    document.getElementById('add-episode-suggestions').style.overflowY = 'auto';
    document.getElementById('add-episode-suggestions').style.overflowX = 'hidden';
    document.getElementById('add-episode-suggestions').style.borderRadius = '10px';

    var top_content = document.createElement("DIV");
    top_content.style.display = 'flex';
    top_content.style.flexDirection = 'row';
    top_content.style.justifyContent = 'flex-start';
    top_content.style.alignItems = 'center';

    if(document.getElementById('add-episode-suggestions').childElementCount < 1){

        var minimize = document.createElement("H3");
        minimize.innerHTML = "&#10006;";
        minimize.style.margin = '5px 0% 5px 0%';
        minimize.style.transition = '0.3s';

        minimize.addEventListener("mouseover", function(){
            this.style.cursor = "pointer";
            this.style.color = "white";
        });

        minimize.addEventListener("mouseout", function(){
            this.style.cursor = "auto";
            this.style.color = "black";
        });

        minimize.addEventListener("click", function(){
            document.getElementById('add-episode-suggestions').style.display = 'none';
            var child = document.getElementById('add-episode-suggestions').lastElementChild;
            while(child){
                document.getElementById('add-episode-suggestions').removeChild(child);
                child = document.getElementById('add-episode-suggestions').lastElementChild;
            }
        });

        document.getElementById("add-episode-find-series-button").addEventListener("click",function(){

            minimize.click();
        });

        top_content.appendChild(minimize);

        var title = document.createElement("H4");
        title.id = 'add-episode-suggestion-title';
        title.style.margin = '0%';
        title.style.paddingLeft = '5px';
        title.innerHTML = "Suggestions for \""+document.getElementById('search-series-name').value+"\"";
        top_content.appendChild(title);

        document.getElementById('add-episode-suggestions').appendChild(top_content);
    }
    findSeriesSuggestions(document.getElementById('search-series-name'));
});

document.getElementById('add-episode-episode-cast-name').addEventListener("focusin",function(){

    document.getElementById('add-episode-suggestions').style.display = 'flex';
    document.getElementById('add-episode-suggestions').style.flexDirection = 'column';
    document.getElementById('add-episode-suggestions').style.alignItems = 'flex-start';
    document.getElementById('add-episode-suggestions').style.padding = '5px 16px 16px 16px';
    document.getElementById('add-episode-suggestions').style.marginLeft = '5px';
    document.getElementById('add-episode-suggestions').style.minWidth = '250px';
    document.getElementById('add-episode-suggestions').style.maxWidth = '300px';
    document.getElementById('add-episode-suggestions').style.maxHeight = (window.innerHeight*0.8)+'px';
    document.getElementById('add-episode-suggestions').style.overflowY = 'auto';
    document.getElementById('add-episode-suggestions').style.overflowX = 'hidden';
    document.getElementById('add-episode-suggestions').style.borderRadius = '10px';

    var top_content = document.createElement("DIV");
    top_content.style.display = 'flex';
    top_content.style.flexDirection = 'row';
    top_content.style.justifyContent = 'flex-start';
    top_content.style.alignItems = 'center';

    if(document.getElementById('add-episode-suggestions').childElementCount < 1){

        var minimize = document.createElement("H3");
        minimize.innerHTML = "&#10006;";
        minimize.style.margin = '5px 0% 5px 0%';
        minimize.style.transition = '0.3s';

        minimize.addEventListener("mouseover", function(){
            this.style.cursor = "pointer";
            this.style.color = "white";
        });

        minimize.addEventListener("mouseout", function(){
            this.style.cursor = "auto";
            this.style.color = "black";
        });

        minimize.addEventListener("click", function(){
            document.getElementById('add-episode-suggestions').style.display = 'none';
            var child = document.getElementById('add-episode-suggestions').lastElementChild;
            while(child){
                document.getElementById('add-episode-suggestions').removeChild(child);
                child = document.getElementById('add-episode-suggestions').lastElementChild;
            }
        });

        top_content.appendChild(minimize);

        var title = document.createElement("H4");
        title.id = 'add-episode-suggestion-title';
        title.style.margin = '0%';
        title.style.paddingLeft = '5px';
        title.innerHTML = "Suggestions for \""+document.getElementById('add-episode-episode-cast-name').value+"\"";
        top_content.appendChild(title);

        document.getElementById('add-episode-suggestions').appendChild(top_content);
    }
    findCastSuggestions(document.getElementById('add-episode-episode-cast-name'));
});

document.getElementById('add-episode-episode-director-name').addEventListener("focusin",function(){

    document.getElementById('add-episode-suggestions').style.display = 'flex';
    document.getElementById('add-episode-suggestions').style.flexDirection = 'column';
    document.getElementById('add-episode-suggestions').style.alignItems = 'flex-start';
    document.getElementById('add-episode-suggestions').style.padding = '5px 16px 16px 16px';
    document.getElementById('add-episode-suggestions').style.marginLeft = '5px';
    document.getElementById('add-episode-suggestions').style.minWidth = '250px';
    document.getElementById('add-episode-suggestions').style.maxWidth = '300px';
    document.getElementById('add-episode-suggestions').style.maxHeight = (window.innerHeight*0.8)+'px';
    document.getElementById('add-episode-suggestions').style.overflowY = 'auto';
    document.getElementById('add-episode-suggestions').style.overflowX = 'hidden';
    document.getElementById('add-episode-suggestions').style.borderRadius = '10px';

    var top_content = document.createElement("DIV");
    top_content.style.display = 'flex';
    top_content.style.flexDirection = 'row';
    top_content.style.justifyContent = 'flex-start';
    top_content.style.alignItems = 'center';

    if(document.getElementById('add-episode-suggestions').childElementCount < 1){

        var minimize = document.createElement("H3");
        minimize.innerHTML = "&#10006;";
        minimize.style.margin = '5px 0% 5px 0%';
        minimize.style.transition = '0.3s';

        minimize.addEventListener("mouseover", function(){
            this.style.cursor = "pointer";
            this.style.color = "white";
        });

        minimize.addEventListener("mouseout", function(){
            this.style.cursor = "auto";
            this.style.color = "black";
        });

        minimize.addEventListener("click", function(){
            document.getElementById('add-episode-suggestions').style.display = 'none';
            var child = document.getElementById('add-episode-suggestions').lastElementChild;
            while(child){
                document.getElementById('add-episode-suggestions').removeChild(child);
                child = document.getElementById('add-episode-suggestions').lastElementChild;
            }
        });

        top_content.appendChild(minimize);

        var title = document.createElement("H4");
        title.id = 'add-episode-suggestion-title';
        title.style.margin = '0%';
        title.style.paddingLeft = '5px';
        title.innerHTML = "Suggestions for \""+document.getElementById('add-episode-episode-director-name').value+"\"";
        top_content.appendChild(title);

        document.getElementById('add-episode-suggestions').appendChild(top_content);
    }
    findDirectorSuggestions(document.getElementById('add-episode-episode-director-name'));
});

var episodeCasts = [];
var series_genre_count = 0;
var episode_banner_image_file;
var episode_banner_image;
var search_result_obj;
var suggestion_result_obj;

var searchSuggestionTimer;

function addEpisode(){

    if(isAllFilled()){

        //var selectedSeasonNumber = document.getElementById('add-episode-episode-season-number').options[document.getElementById('add-episode-episode-season-number').selectedIndex].text;
        const episode_obj = {
            "SeriesID":search_result_obj["seriesID"],
            "SeasonID":document.getElementById('add-episode-episode-season-number').value,
            "EpisodeID":-1,
            "EpisodeBanner":episode_banner_image,
            "EpisodeNumber":document.getElementById('add-episode-episode-number').value,
            "EpisodeTitle":document.getElementById('add-episode-episode-title').value,
            "EpisodeReleaseDate":document.getElementById('add-episode-episode-release-date').value,
            "EpisodeDuration":document.getElementById('add-episode-episode-duration').value,
            "EpisodeDescription":document.getElementById('add-episode-episode-description').value,
            "EpisodeDirector":[{
                "DirectorName":document.getElementById('add-episode-episode-director-name').value,
                "DirectorGender":document.getElementById('add-episode-episode-director-gender').value,
                "DirectorEmail":document.getElementById('add-episode-episode-director-email').value
            }],
            "EpisodeCasts":episodeCasts
        };

        var xhttp = new XMLHttpRequest();
        var url = "process_add_episode.php";
        xhttp.open('POST',url,true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.onreadystatechange = function(){
    
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                
                document.getElementById('modal-content').innerHTML = this.responseText;
                var modal_button = document.createElement('BUTTON');
                modal_button.innerHTML = 'Okay';
                modal_button.style.marginLeft = '0%';

                document.getElementById('modal-bg').style.display = 'flex';
                document.getElementById('modal-bg').style.flexDirection = 'column';
                document.getElementById('modal-bg').style.justifyContent = 'center';
                document.getElementById('modal-bg').style.backgroundColor = 'rgba(223,223,223,0.7)';
                document.getElementById('modal-content').appendChild(modal_button);
                modal_button.addEventListener('click',function(){

                    document.getElementById('modal-bg').style.display = 'none';
                    var child = document.getElementById('modal-content').lastElementChild; 
                    while (child) {
                        document.getElementById('modal-content').removeChild(child);
                        child = document.getElementById('modal-content').lastElementChild;
                    }
                    this.remove();
                    findSeries();
                    formReset();
                });
            }
        };
    
        var data = JSON.stringify(episode_obj);
        xhttp.send(data);
    }else{

        var modal_button = document.createElement('BUTTON');
        modal_button.innerHTML = 'Okay';
        modal_button.style.marginLeft = '0%';

        document.getElementById('modal-bg').style.display = 'flex';
        document.getElementById('modal-bg').style.flexDirection = 'column';
        document.getElementById('modal-bg').style.justifyContent = 'center';
        document.getElementById('modal-bg').style.backgroundColor = 'rgba(223,223,223,0.7)';
        document.getElementById('modal-content').appendChild(modal_button);

        modal_button.addEventListener('click',function(){

            document.getElementById('modal-bg').style.display = 'none';
            var child = document.getElementById('modal-content').lastElementChild; 
            while(child){
                document.getElementById('modal-content').removeChild(child);
                child = document.getElementById('modal-content').lastElementChild;
            }
            modal_button.remove();
        });
    }
}

function isAllFilled(){

    var unordered_list = document.createElement("UL");
    unordered_list.style.padding = '0px';
    unordered_list.style.fontFamily = 'Montserrat-Semibold';

    if(document.getElementById('add-episode-episode-banner').files.length <= 0){

        var list = document.createElement('LI');
        list.innerHTML = "Select a banner for the episode!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }

    //season will always get pre-selected, and there is no default value

    if(document.getElementById('add-episode-episode-number').value == ""){

        var list = document.createElement('LI');
        list.innerHTML = "Episode number must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }else{

        if(document.getElementById('add-episode-episode-number').value < 1){

            var list = document.createElement('LI');
            list.innerHTML = "Episode number must be a positive value!";
            list.style.listStyleType = 'none';
            list.style.marginLeft = '0%';
            list.style.paddingLeft = '0px';
            unordered_list.appendChild(list);
        }
    }

    if(document.getElementById('add-episode-episode-title').value == ""){

        var list = document.createElement('LI');
        list.innerHTML = "Episode title must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }

    if(document.getElementById('add-episode-episode-release-date').value == ""){

        var list = document.createElement('LI');
        list.innerHTML = "Episode release date must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }

    if(document.getElementById('add-episode-episode-duration').value == ""){

        var list = document.createElement('LI');
        list.innerHTML = "Episode duration must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }else{

        if(document.getElementById('add-episode-episode-duration').value < 1){

            var list = document.createElement('LI');
            list.innerHTML = "Episode duration must be a positive value!";
            list.style.listStyleType = 'none';
            list.style.marginLeft = '0%';
            list.style.paddingLeft = '0px';
            unordered_list.appendChild(list);
        }
    }

    if(document.getElementById('add-episode-episode-description').value == ""){

        var list = document.createElement('LI');
        list.innerHTML = "Episode description must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }

    if(!isDirectorAlreadyAdded()){

        var list = document.createElement('LI');
        list.innerHTML = "Director details must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }

    if(episodeCasts.length == 0){

        var list = document.createElement('LI');
        list.innerHTML = "Cast details must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }

    if(unordered_list.childElementCount > 0){

        document.getElementById("modal-content").appendChild(unordered_list);
        return false;
    }else{

        return true;
    }
}

function findSeries(){

    var search_series_query = document.getElementById('search-series-name').value;

    var xhttp = new XMLHttpRequest();
    var url = 'process_search_series.php';
    xhttp.open('POST',url,true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function(){

        if (xhttp.readyState === 4 && xhttp.status === 200) {

            // Print received data from server
            search_result_obj = JSON.parse(this.responseText);
            //console.log(this.responseText);

            if(JSON.parse(this.responseText) == "none"){

                document.getElementById('modal-content').innerHTML = "No result(s) available!";
                var modal_button = document.createElement('BUTTON');
                modal_button.innerHTML = 'Okay';
                modal_button.style.marginLeft = '0%';

                document.getElementById('modal-bg').style.display = 'flex';
                document.getElementById('modal-bg').style.flexDirection = 'column';
                document.getElementById('modal-bg').style.justifyContent = 'center';
                document.getElementById('modal-bg').style.backgroundColor = 'rgba(223,223,223,0.7)';
                document.getElementById('modal-content').appendChild(modal_button);
                modal_button.addEventListener('click',function(){

                    document.getElementById('modal-bg').style.display = 'none';
                    document.getElementById('modal-content').innerHTML = '';
                    modal_button.remove();
                });
            }else{

                //console.log(search_result);
                if(search_result_obj["seriesSeason"].length > 0){

                    document.getElementById('search-series-form').style.display = 'none';
                    document.getElementById('add-episode-content').style.display = 'flex';
                    document.getElementById('add-episode-content').style.flexDirection = 'column';
                    document.getElementById('add-episode-content').style.justifyContent = 'flex-start';
                    //document.getElementById('admin-create-series-add-season').style.border = '1px solid black';
                    insertSeriesDetails();
                    preInsertData();
                }else{

                    document.getElementById('search-series-form').style.display = 'none';
                    document.getElementById("add-episode-no-season-alert").style.display = "flex";
                    document.getElementById("add-episode-no-season-alert").style.marginLeft = "5%";
                    setTimeout(function(){location.reload()},4500);
                }
            }
        }
    };

    var data = JSON.stringify(search_series_query);
    xhttp.send(data);
}

function findCastSuggestions(element){

    //clear initial timer
    clearTimeout(searchSuggestionTimer);
    const suggestion = function(){
    
        if(document.getElementById('add-episode-suggestions').childElementCount > 1){

            var child = document.getElementById('add-episode-suggestions').lastElementChild;
            document.getElementById('add-episode-suggestions').removeChild(child);
            document.getElementById('add-episode-suggestion-title').innerHTML = "Suggestions for \"\"";
        }

        if(element.value != ""){
        
            var search_suggestion_obj = {"Keyword":element.value};
        
            var xhttp = new XMLHttpRequest();
            var url = "process_suggest_cast.php";
            xhttp.open('POST',url,true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.onreadystatechange = function(){
        
                if (xhttp.readyState === 4 && xhttp.status === 200) {
        
                    // Print received data from server
                    var result_container = document.createElement("DIV");
                    result_container.style.width = document.getElementById("add-episode-suggestions").clientWidth+"px";
                    suggestion_result_obj = JSON.parse(this.responseText);
                    //console.log(suggestion_result_obj["suggestion_result"].length > 0);
                    if(suggestion_result_obj["suggestion_result"].length > 0){
        
                        for(var result of suggestion_result_obj["suggestion_result"]){
        
                            var paragraph = document.createElement("P");
                            paragraph.style.margin = '0%';
                            paragraph.style.padding = '10px';
                            paragraph.style.display = 'flex';
                            paragraph.style.transition = '0.3s';
                            paragraph.style.borderRadius = '10px';
                            paragraph.style.cursor = 'pointer';
                            paragraph.style.width = 'parent';
                            paragraph.addEventListener("mouseover",function(){
    
                                this.style.color = 'white';
                                this.style.backgroundColor = '#CF6627';
                            });
    
                            paragraph.addEventListener("mouseout",function(){
    
                                this.style.color = 'black';
                                this.style.backgroundColor = 'rgba(0,0,0,0)';
                            });
    
                            paragraph.addEventListener("click", function(){
    
                                for(var input_result of suggestion_result_obj["suggestion_result"]){
    
                                    if(input_result["CastName"] == this.innerHTML){
    
                                        document.getElementById("add-episode-episode-cast-name").value = input_result["CastName"];
                                        document.getElementById("add-episode-episode-cast-gender").value = input_result["CastGender"];
                                        document.getElementById("add-episode-episode-cast-email").value = input_result["CastEmail"];
                                        break;
                                    }
                                }
                            });
    
                            paragraph.innerHTML = result["CastName"];
                            result_container.appendChild(paragraph);
                        }
                        document.getElementById('add-episode-suggestions').appendChild(result_container);
                    }else{
        
                        var paragraph = document.createElement("P");
                        paragraph.innerHTML = "No result(s).";
                        result_container.appendChild(paragraph);
                        document.getElementById('add-episode-suggestions').appendChild(result_container);
                    }
                    document.getElementById('add-episode-suggestion-title').innerHTML = "Suggestions for \""+element.value+"\"";
                }
            };
        
            var data = JSON.stringify(search_suggestion_obj);
            xhttp.send(data);
        }
    };

    //set 0.5s delay after user stopped typing
    searchSuggestionTimer = setTimeout(suggestion,500);
}

function findDirectorSuggestions(element){

    //clear initial timer
    clearTimeout(searchSuggestionTimer);
    const suggestion = function(){
    
        if(document.getElementById('add-episode-suggestions').childElementCount > 1){

            var child = document.getElementById('add-episode-suggestions').lastElementChild;
            document.getElementById('add-episode-suggestions').removeChild(child);
            document.getElementById('add-episode-suggestion-title').innerHTML = "Suggestions for \"\"";
        }

        if(element.value != ""){
        
            var search_suggestion_obj = {"Keyword":element.value};
        
            var xhttp = new XMLHttpRequest();
            var url = "process_suggest_director.php";
            xhttp.open('POST',url,true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.onreadystatechange = function(){
        
                if (xhttp.readyState === 4 && xhttp.status === 200) {
        
                    // Print received data from server
                    var result_container = document.createElement("DIV");
                    result_container.style.width = document.getElementById("add-episode-suggestions").clientWidth+"px";
                    suggestion_result_obj = JSON.parse(this.responseText);
                    //console.log(suggestion_result_obj["suggestion_result"].length > 0);
                    if(suggestion_result_obj["suggestion_result"].length > 0){
        
                        for(var result of suggestion_result_obj["suggestion_result"]){
        
                            var paragraph = document.createElement("P");
                            paragraph.style.margin = '0%';
                            paragraph.style.padding = '10px';
                            paragraph.style.display = 'flex';
                            paragraph.style.transition = '0.3s';
                            paragraph.style.borderRadius = '10px';
                            paragraph.style.cursor = 'pointer';
                            paragraph.style.width = 'parent';
                            paragraph.addEventListener("mouseover",function(){
    
                                this.style.color = 'white';
                                this.style.backgroundColor = '#CF6627';
                            });
    
                            paragraph.addEventListener("mouseout",function(){
    
                                this.style.color = 'black';
                                this.style.backgroundColor = 'rgba(0,0,0,0)';
                            });
    
                            paragraph.addEventListener("click", function(){
    
                                for(var input_result of suggestion_result_obj["suggestion_result"]){
    
                                    if(input_result["DirectorName"] == this.innerHTML){
    
                                        document.getElementById("add-episode-episode-director-name").value = input_result["DirectorName"];
                                        document.getElementById("add-episode-episode-director-gender").value = input_result["DirectorGender"];
                                        document.getElementById("add-episode-episode-director-email").value = input_result["DirectorEmail"];
                                        break;
                                    }
                                }
                            });
    
                            paragraph.innerHTML = result["DirectorName"];
                            result_container.appendChild(paragraph);
                        }
                        document.getElementById('add-episode-suggestions').appendChild(result_container);
                    }else{
        
                        var paragraph = document.createElement("P");
                        paragraph.innerHTML = "No result(s).";
                        result_container.appendChild(paragraph);
                        document.getElementById('add-episode-suggestions').appendChild(result_container);
                    }
                    document.getElementById('add-episode-suggestion-title').innerHTML = "Suggestions for \""+element.value+"\"";
                }
            };
        
            var data = JSON.stringify(search_suggestion_obj);
            xhttp.send(data);
        }
    };

    //set 0.5s delay after user stopped typing
    searchSuggestionTimer = setTimeout(suggestion,500);
}

function findSeriesSuggestions(element){

    //clear initial timer
    clearTimeout(searchSuggestionTimer);
    const suggestion = function(){
    
        if(document.getElementById('add-episode-suggestions').childElementCount > 1){

            var child = document.getElementById('add-episode-suggestions').lastElementChild;
            document.getElementById('add-episode-suggestions').removeChild(child);
            document.getElementById('add-episode-suggestion-title').innerHTML = "Suggestions for \"\"";
        }

        if(element.value != ""){
        
            var search_suggestion_obj = {"Keyword":element.value};
        
            var xhttp = new XMLHttpRequest();
            var url = "process_suggest_series.php";
            xhttp.open('POST',url,true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.onreadystatechange = function(){
        
                if (xhttp.readyState === 4 && xhttp.status === 200) {
        
                    // Print received data from server
                    var result_container = document.createElement("DIV");
                    result_container.style.width = document.getElementById("add-episode-suggestions").clientWidth+"px";
                    suggestion_result_obj = JSON.parse(this.responseText);
                    //console.log(suggestion_result_obj["suggestion_result"].length > 0);
                    if(suggestion_result_obj["suggestion_result"].length > 0){
        
                        for(var result of suggestion_result_obj["suggestion_result"]){
        
                            var paragraph = document.createElement("P");
                            paragraph.style.margin = '0%';
                            paragraph.style.padding = '10px';
                            paragraph.style.display = 'flex';
                            paragraph.style.transition = '0.3s';
                            paragraph.style.borderRadius = '10px';
                            paragraph.style.cursor = 'pointer';
                            paragraph.style.width = 'parent';
                            paragraph.addEventListener("mouseover",function(){
    
                                this.style.color = 'white';
                                this.style.backgroundColor = '#CF6627';
                            });
    
                            paragraph.addEventListener("mouseout",function(){
    
                                this.style.color = 'black';
                                this.style.backgroundColor = 'rgba(0,0,0,0)';
                            });
    
                            paragraph.addEventListener("click", function(){
    
                                for(var input_result of suggestion_result_obj["suggestion_result"]){
    
                                    if(input_result["SeriesTitle"] == this.innerHTML){
    
                                        element.value = input_result["SeriesTitle"];
                                        break;
                                    }
                                }
                            });
    
                            paragraph.innerHTML = result["SeriesTitle"];
                            result_container.appendChild(paragraph);
                        }
                        document.getElementById('add-episode-suggestions').appendChild(result_container);
                    }else{
        
                        var paragraph = document.createElement("P");
                        paragraph.innerHTML = "No result(s).";
                        result_container.appendChild(paragraph);
                        document.getElementById('add-episode-suggestions').appendChild(result_container);
                    }
                    document.getElementById('add-episode-suggestion-title').innerHTML = "Suggestions for \""+element.value+"\"";
                }
            };
        
            var data = JSON.stringify(search_suggestion_obj);
            xhttp.send(data);
        }
    };

    //set 0.5s delay after user stopped typing
    searchSuggestionTimer = setTimeout(suggestion,500);
}

function insertSeriesDetails(){

    var image = document.getElementById('search-result-series-banner-image');
    image.style.display = 'flex';
    image.src = search_result_obj['seriesBanner'];
    image.width = window.innerWidth*0.4;
    image.height = (image.clientWidth*0.56)+'';
    image.style.borderRadius = '10px';

    document.getElementById('search-result-series-name').innerHTML = search_result_obj['seriesName'];
    document.getElementById('search-result-series-total-season').innerHTML = getNumberOfSeasons();
    document.getElementById('search-result-total-series-episode').innerHTML = "<b>Number of episode(s):</b> "+getNumberOfEpisodes();
    document.getElementById('search-result-series-rating').innerHTML = "<b>Series rating:</b> "+search_result_obj['seriesRating']+" out of 10";
    document.getElementById('search-result-series-release-date').innerHTML = "<b>Release date:</b> "+search_result_obj['seriesReleaseDate'];
    document.getElementById('search-result-series-awards').innerHTML = getNumberOfAwards();
    document.getElementById('search-result-series-description').innerHTML = "<i>\""+search_result_obj['seriesDescription']+"\"</i>";

    if(document.querySelector("p#search-result-series-total-season ul")){

        document.querySelector("p#search-result-series-total-season ul").style.display = 'none';
        document.getElementById("search-result-series-total-season").style.transition = "0.3s";
        document.getElementById("search-result-series-total-season").addEventListener("mouseover",function(){

            if(document.getElementById("search-result-series-total-season").childElementCount > 1){

                document.querySelector("p#search-result-series-total-season ul").style.display = 'block';
            }
        });

        document.getElementById("search-result-series-total-season").addEventListener("mouseout",function(){

            if(document.getElementById("search-result-series-total-season").childElementCount > 1){

                document.querySelector("p#search-result-series-total-season ul").style.display = 'none';
            }
        });
    }

    if(document.querySelector("p#search-result-series-awards ul")){

        document.querySelector("p#search-result-series-awards ul").style.display = 'none';
        document.getElementById("search-result-series-awards").style.transition = "0.3s";
        document.getElementById("search-result-series-awards").addEventListener("mouseover",function(){

            if(document.getElementById("search-result-series-awards").childElementCount > 1){

                document.querySelector("p#search-result-series-awards ul").style.display = 'block';
            }
        });

        document.getElementById("search-result-series-awards").addEventListener("mouseout",function(){

            if(document.getElementById("search-result-series-awards").childElementCount > 1){

                document.querySelector("p#search-result-series-awards ul").style.display = 'none';
            }
        });
    }
}

function getNumberOfSeasons(){

    var numberOfSeasons = search_result_obj['seriesSeason'].length;
    if(numberOfSeasons <= 0){

        return "<b>Number of season(s):</b> "+numberOfSeasons;
    }else{

        var unordered_list = document.createElement('UL');
        
        for(var season of search_result_obj['seriesSeason']){

            var list = document.createElement('LI');
            list.innerHTML = "Season "+season['SeasonNumber']+" ("+season['SeasonReleaseDate']+")";
            unordered_list.appendChild(list);
        }

        return "<b><u>Number of season(s):</u></b> "+numberOfSeasons+unordered_list.outerHTML;
    }
}

function getNumberOfEpisodes(){

    var numberOfEpisodes = 0;

    for(var season of search_result_obj['seriesEpisode']){

        numberOfEpisodes += season.length;
    }
    return numberOfEpisodes;
}

function getNumberOfAwards(){

    var numberOfAwards = search_result_obj['seriesAwards'].length;
    if(numberOfAwards <= 0){

        return "<b>Number of award(s):</b> "+0;
    }else{

        var unordered_list = document.createElement('UL');
        
        for(var awards of search_result_obj['seriesAwards']){

            var list = document.createElement('LI');
            list.innerHTML = awards["AwardsName"]+" ("+awards["AwardsCategory"]+","+awards["AwardsYear"]+") - "+awards["AwardsDescription"];
            unordered_list.appendChild(list);
        }

        return "<b><u>Number of award(s):</u></b> "+numberOfAwards+unordered_list.outerHTML;
    }
}

function getImage(event){

    var image_view = document.getElementById('add-episode-episode-banner-display');
    episode_banner_image_file = event.target.files[0];

    var image = document.createElement('IMG');
    image.style.display = 'flex';
    image.id = 'series-banner-001';
    image.src = URL.createObjectURL(episode_banner_image_file);
    image.width = image_view.clientWidth;
    //console.log(document.getElementById('add-series-series-banner-display').clientWidth);
    image.height = (image_view.clientWidth*0.56)+'';
    image.style.borderRadius = '10px';
    image_view.appendChild(image);
    image_view.style.border = 'none';

    imgTo64((dataURL)=>{

        episode_banner_image = dataURL;
        //console.log(series_banner_image);
    });
}

function imgTo64(callback){

    var image = new Image();

    var dataURL = '';
    image.src = URL.createObjectURL(episode_banner_image_file);
    image.onload = ()=>{

        var canvas = document.createElement('CANVAS');
        var context = canvas.getContext('2d');
        //console.log(series_banner_image_file);
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image,0,0);
        dataURL = canvas.toDataURL('image/png');
        callback?callback(dataURL):null;
    };
}

function preInsertData(){
    //insert options into season number, episode director, and episode cast, if any
    var child = document.getElementById("add-episode-episode-season-number").lastElementChild;
    while(child){
        document.getElementById("add-episode-episode-season-number").removeChild(child);
        child = document.getElementById("add-episode-episode-season-number").lastElementChild;
    }

    for(var seriesSeason of search_result_obj['seriesSeason']){

        var option = document.createElement("OPTION");
        option.value = seriesSeason['SeasonID'];
        option.innerHTML = "Season "+seriesSeason['SeasonNumber'];
        document.getElementById("add-episode-episode-season-number").appendChild(option);
    }
}

function addCast(){

    if(isCastFormFilled()){

        if(!isCastAlreadyAdded()){

            var unordered_list = document.getElementById('add-episode-episode-cast-list');
            var list = document.createElement("LI");
            list.innerHTML = document.getElementById("add-episode-episode-cast-name").value;
            list.style.fontFamily = 'Montserrat-Regular';
            list.style.fontSize = '16px';
            list.style.cursor = 'pointer';
            list.style.paddingBottom = '5px';
    
            list.addEventListener('click', function(){
    
                var i = 0;
                for(var cast of episodeCasts){
    
                    //console.log(cast["CastName"]);
                    if(cast.CastName == this.innerHTML){
    
                        episodeCasts.splice(i, 1);
                        break;
                    }
                    ++i;
                }
                this.remove();
                //console.log(episodeCasts);
            });
    
            list.addEventListener('mouseenter',function(){
    
                this.style.color = 'red';
                this.style.fontWeight = 'bold';
            });
    
            list.addEventListener('mouseleave',function(){
    
                this.style.color = 'black';
                this.style.fontWeight = 'normal';
            });
    
            unordered_list.appendChild(list);
    
            episodeCasts.push({
                "CastID":-1,
                "CastName":document.getElementById("add-episode-episode-cast-name").value,
                "CastGender":document.getElementById("add-episode-episode-cast-gender").value,
                "CastEmail":document.getElementById("add-episode-episode-cast-email").value
            });
        }
    
        document.getElementById('add-episode-episode-cast-name').value = "";
        document.getElementById('add-episode-episode-cast-gender').value = "null";
        document.getElementById('add-episode-episode-cast-email').value = "";
    }else{

        var modal_button = document.createElement('BUTTON');
        modal_button.innerHTML = 'Okay';
        modal_button.style.marginLeft = '0%';

        document.getElementById('modal-bg').style.display = 'flex';
        document.getElementById('modal-bg').style.flexDirection = 'column';
        document.getElementById('modal-bg').style.justifyContent = 'center';
        document.getElementById('modal-bg').style.backgroundColor = 'rgba(223,223,223,0.7)';
        document.getElementById('modal-content').appendChild(modal_button);

        modal_button.addEventListener('click',function(){

            document.getElementById('modal-bg').style.display = 'none';
            var child = document.getElementById('modal-content').lastElementChild; 
            while(child){
                document.getElementById('modal-content').removeChild(child);
                child = document.getElementById('modal-content').lastElementChild;
            }
            modal_button.remove();
        });
    }
}

function isCastAlreadyAdded(){

    const episode_cast_list = document.getElementById("add-episode-episode-cast-list");
    const episode_cast_name = document.getElementById("add-episode-episode-cast-name");
    const number_of_casts = episode_cast_list.childElementCount;
    if(number_of_casts > 0){

        for(var i = 0; i < number_of_casts; ++i){

            if(episode_cast_list.children[i].innerHTML == episode_cast_name.value){

                return true;
            }
        }   
    }

    return false;
}

function isDirectorAlreadyAdded(){

    if(document.getElementById("add-episode-episode-director-name").value == ""){

        return false;
    }
    if(document.getElementById("add-episode-episode-director-gender").value == "null"){

        return false;
    }
    if(document.getElementById("add-episode-episode-director-email").value == ""){

        return false;
    }

    return true;
}

function isCastFormFilled(){

    var unordered_list = document.createElement("UL");
    unordered_list.style.padding = '0px';
    unordered_list.style.fontFamily = 'Montserrat-Semibold';

    if(document.getElementById("add-episode-episode-cast-name").value == ""){

        var list = document.createElement('LI');
        list.innerHTML = "Cast name must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }

    if(document.getElementById("add-episode-episode-cast-gender").value == "null"){

        var list = document.createElement('LI');
        list.innerHTML = "Cast gender must be selected!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }

    if(document.getElementById("add-episode-episode-cast-email").value == ""){

        var list = document.createElement('LI');
        list.innerHTML = "Cast email must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }else{

        var emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!emailValidationRegex.test(document.getElementById("add-episode-episode-cast-email").value)){

            var list = document.createElement('LI');
            list.innerHTML = "Email must be in proper format!";
            list.style.listStyleType = 'none';
            list.style.marginLeft = '0%';
            list.style.paddingLeft = '0px';
            unordered_list.appendChild(list);
        }
    }

    if(unordered_list.childElementCount > 0){

        document.getElementById("modal-content").appendChild(unordered_list);
        return false;
    }else{

        return true;
    }
}

function back(){

    document.getElementById('add-episode-content').style.display = 'none';
    document.getElementById('search-series-form').style.display = 'flex';
    document.getElementById('search-series-form').style.flexDirection = 'column';
    document.getElementById('search-series-form').style.justifyContent = 'center';
}

function formReset(){
    document.getElementById("add-episode-form").reset();
    episodeCasts = [];
    document.getElementById("add-episode-episode-banner-display").removeChild(document.getElementById("add-episode-episode-banner-display").lastElementChild);

    var child = document.getElementById("add-episode-episode-cast-list").lastElementChild;
    while(child){
        document.getElementById("add-episode-episode-cast-list").removeChild(child);
        child = document.getElementById("add-episode-episode-cast-list").lastElementChild;
    }
}