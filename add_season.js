document.getElementById("nav-add-season").disabled = true;

document.getElementById('search-series-name').addEventListener("focusin",function(){

    document.getElementById('add-season-suggestions').style.display = 'flex';
    document.getElementById('add-season-suggestions').style.flexDirection = 'column';
    document.getElementById('add-season-suggestions').style.alignItems = 'flex-start';
    document.getElementById('add-season-suggestions').style.padding = '5px 16px 16px 16px';
    document.getElementById('add-season-suggestions').style.marginLeft = '5px';
    document.getElementById('add-season-suggestions').style.minWidth = '250px';
    document.getElementById('add-season-suggestions').style.maxWidth = '300px';
    document.getElementById('add-season-suggestions').style.maxHeight = (window.innerHeight*0.8)+'px';
    document.getElementById('add-season-suggestions').style.overflowY = 'auto';
    document.getElementById('add-season-suggestions').style.overflowX = 'hidden';
    document.getElementById('add-season-suggestions').style.borderRadius = '10px';

    var top_content = document.createElement("DIV");
    top_content.style.display = 'flex';
    top_content.style.flexDirection = 'row';
    top_content.style.justifyContent = 'flex-start';
    top_content.style.alignItems = 'center';

    if(document.getElementById('add-season-suggestions').childElementCount < 1){

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
            document.getElementById('add-season-suggestions').style.display = 'none';
            var child = document.getElementById('add-season-suggestions').lastElementChild;
            while(child){
                document.getElementById('add-season-suggestions').removeChild(child);
                child = document.getElementById('add-season-suggestions').lastElementChild;
            }
        });

        document.getElementById("add-season-find-series-button").addEventListener("click",function(){

            minimize.click();
        });

        top_content.appendChild(minimize);

        var title = document.createElement("H4");
        title.id = 'add-season-suggestion-title';
        title.style.margin = '0%';
        title.style.paddingLeft = '5px';
        title.innerHTML = "Suggestions for \""+document.getElementById('search-series-name').value+"\"";
        top_content.appendChild(title);

        document.getElementById('add-season-suggestions').appendChild(top_content);
    }
    findSeriesSuggestions(document.getElementById('search-series-name'));
});

var search_result_obj;
var searchSuggestionTimer;

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
                document.getElementById('search-series-form').style.display = 'none';
                document.getElementById('add-season-content').style.display = 'flex';
                document.getElementById('add-season-content').style.flexDirection = 'column';
                document.getElementById('add-season-content').style.justifyContent = 'flex-start';
                //document.getElementById('admin-create-series-add-season').style.border = '1px solid black';
                insertSeriesDetails();
            }
        }
    };

    var data = JSON.stringify(search_series_query);
    xhttp.send(data);
}

function findSeriesSuggestions(element){

    //clear initial timer
    clearTimeout(searchSuggestionTimer);
    const suggestion = function(){
    
        if(document.getElementById('add-season-suggestions').childElementCount > 1){

            var child = document.getElementById('add-season-suggestions').lastElementChild;
            document.getElementById('add-season-suggestions').removeChild(child);
            document.getElementById('add-season-suggestion-title').innerHTML = "Suggestions for \"\"";
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
                    result_container.style.width = document.getElementById("add-season-suggestions").clientWidth+"px";
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
                        document.getElementById('add-season-suggestions').appendChild(result_container);
                    }else{
        
                        var paragraph = document.createElement("P");
                        paragraph.innerHTML = "No result(s).";
                        result_container.appendChild(paragraph);
                        document.getElementById('add-season-suggestions').appendChild(result_container);
                    }
                    document.getElementById('add-season-suggestion-title').innerHTML = "Suggestions for \""+element.value+"\"";
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
            list.style.marginBottom = "5px";
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
            list.style.marginBottom = "5px";
            unordered_list.appendChild(list);
        }

        return "<b><u>Number of award(s):</u></b> "+numberOfAwards+unordered_list.outerHTML;
    }
}

function addSeason(){

    if(isDateFilled()){

        const season_obj = {
            "SeriesID":search_result_obj['seriesID'],
            "SeasonID":-1,
            "SeasonNumber":getNextSeasonNumber(),
            "SeasonReleaseDate":document.getElementById('add-season-season-release-date').value
        };

        var xhttp = new XMLHttpRequest();
        var url = 'process_add_season.php';
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
                    while(child){

                        document.getElementById('modal-content').removeChild(child);
                        child = document.getElementById('modal-content').lastElementChild;
                    }
                    modal_button.remove();
                    findSeries();
                    formReset();
                });
            }
        };

        var data = JSON.stringify(season_obj);
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
            while (child) {
                document.getElementById('modal-content').removeChild(child);
                child = document.getElementById('modal-content').lastElementChild;
            }
            modal_button.remove();
        });
    }
}

function getNextSeasonNumber(){

    var highest_season_number = 0;
    for(var season of search_result_obj["seriesSeason"]){

        if(season["SeasonNumber"] > highest_season_number){

            highest_season_number = season["SeasonNumber"];
        }
    }

    return highest_season_number+1;
}

function isDateFilled(){

    var unordered_list = document.createElement("UL");
    unordered_list.style.padding = '0px';
    unordered_list.style.fontFamily = 'Montserrat-Semibold';

    if(document.getElementById('add-season-season-release-date').value == ""){

        var list = document.createElement('LI');
        list.innerHTML = "Season release date must be entered!";
        list.style.listStyleType = 'none';
        list.style.marginLeft = '0%';
        list.style.paddingLeft = '0px';
        unordered_list.appendChild(list);
    }else{

        var d1 = new Date(search_result_obj["seriesReleaseDate"]);
        var d2 = new Date(document.getElementById('add-season-season-release-date').value);
        //console.log(d1.getTime()+" "+d2.getTime());
        if(d1.getTime() > d2.getTime()){

            var list = document.createElement('LI');
            list.innerHTML = "Season release date must not before series release date!";
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

    document.getElementById('add-season-content').style.display = 'none';
    document.getElementById('search-series-form').style.display = 'flex';
    document.getElementById('search-series-form').style.flexDirection = 'column';
    document.getElementById('search-series-form').style.justifyContent = 'center';
}

function formReset(){
    document.getElementById("add-season-form").reset();
}